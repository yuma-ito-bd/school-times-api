import { Request, Response } from 'express';
import { db } from '../../db/models/index';
import { Articles } from '../../db/models/Articles';
import { Logger } from '../lib/Logger';

class ArticlesController {
    async get(req: Request, res: Response) {
        Logger.info(`ArticlesController.get is called.`);

        const { id, authorId, status } = req.query;
        Logger.info(`Input param`, {
            id,
            authorId,
            status,
        });
        const options: any = { where: { deleteFlg: false } };
        if (id) options.where.id = id;
        if (authorId) options.where.authorId = authorId;
        if (status) options.where.status = status;

        await db.Articles.findAll(options)
            .then((result: Articles[]) =>
                res.status(200).send({ articles: result })
            )
            .catch((error: any) => {
                Logger.error(`ArticlesController.get error`, error);
                res.status(500).send({ message: `Internal Server Error.` });
            });
        Logger.info(`ArticlesController.get is end.`);
    }

    async post(req: Request, res: Response) {
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
            res.status(200).send(articlesResult);
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
