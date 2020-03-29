import { Request, Response } from 'express';
import { db } from '../../db/models/index';
import { Articles } from '../../db/models/Articles';
import { Logger } from '../lib/Logger';
import { GetArticleRequest, GetArticleResponse } from '../interface/GetArticle';
import { ArticleRepositoryInterface } from '../usecase/article/ArticleRepository';
import { ArticleUsecase } from '../usecase/article/ArticleUsecase';
import { ArticleRepository } from '../interface/ArticleRepository';
import { CreateArticleResponse } from '../interface/CreateArticle';

class ArticlesController {
    private _repository: ArticleRepositoryInterface;

    constructor() {
        this._repository = new ArticleRepository();
    }

    async get(params: GetArticleRequest): Promise<GetArticleResponse> {
        Logger.info(`ArticlesController.get is called.`, params);
        const usecase = new ArticleUsecase(this._repository);
        const list = await usecase.getArticleList(Number(params.authorId));
        const response: GetArticleResponse = { articles: list };
        Logger.info(`ArticlesController.get is end.`, JSON.stringify(response));
        return response;
    }

    async post(req: Request, res: Response): Promise<void> {
        Logger.info(`ArticlesController.post is called.`);

        // トランザクションスタート
        const tran = await db.sequelize.transaction();
        try {
            const { title, contents, authorId, status } = req.body;
            Logger.info(`Input param`, {
                title,
                contents,
                authorId,
                status,
            });

            const articlesResult: Articles = await db.Articles.create(
                {
                    title,
                    contents,
                    authorId,
                    status,
                },
                {
                    transaction: tran,
                }
            );

            await tran.commit();

            // 成功時に作成レコード情報を返却
            const body: CreateArticleResponse = articlesResult;
            res.status(200).json(body);
        } catch (error) {
            await tran.rollback();
            Logger.error(`ArticlesController.post error`, error);
            res.status(500).send({ message: `Internal Server Error.` });
        } finally {
            Logger.info(`ArticlesController.post is end.`);
        }
    }

    async patch(req: Request, res: Response) {
        Logger.info(`ArticlesController.patch is called.`);

        // トランザクションスタート
        const tran = await db.sequelize.transaction();
        try {
            const { articleId } = req.params;
            const { title, contents, authorId, status } = req.body;
            Logger.info(`Input param`, {
                articleId,
                title,
                contents,
                authorId,
                status,
            });

            const articlesResult: [
                number,
                Articles[]
            ] = await db.Articles.update(
                {
                    title,
                    contents,
                    authorId,
                    status,
                },
                {
                    where: {
                        id: articleId,
                        deleteFlg: false,
                    },
                    transaction: tran,
                    returning: true,
                }
            );

            await tran.commit();

            // 成功時に更新レコード情報を返却
            res.status(200).send({
                updateNum: articlesResult[0],
                articles: articlesResult[1],
            });
        } catch (error) {
            await tran.rollback();
            Logger.error(`ArticlesController.patch error`, error);
            res.status(500).send({ message: `Internal Server Error.` });
        } finally {
            Logger.info(`ArticlesController.patch is end.`);
        }
    }

    async delete(req: Request, res: Response) {
        Logger.info(`ArticlesController.delete is calld.`);

        // トランザクションスタート
        const tran = await db.sequelize.transaction();
        try {
            const { articleId } = req.params;
            Logger.info(`Input param`, { articleId });

            const articlesResult: [
                number,
                Articles[]
            ] = await db.Articles.update(
                {
                    deleteFlg: true,
                },
                {
                    where: { id: articleId },
                    transaction: tran,
                    returning: true,
                }
            );

            await tran.commit();

            // 成功時に更新レコード情報を返却
            res.status(200).send({
                deleteNum: articlesResult[0],
                articles: articlesResult[1],
            });
        } catch (error) {
            await tran.rollback();
            Logger.error(`ArticlesController.get error`, error);
            res.status(500).send({ message: `Internal Server Error.` });
        } finally {
            Logger.info(`ArticlesController.delete is end.`);
        }
    }
}

export const articlesController = new ArticlesController();
