import { Response, Request } from 'express';
import { PublishedArticlesQueryService } from '../../infrastructure/query-services/articles/PublishedArticlesQueryService';
import { ArticlesRepository } from '../../infrastructure/repositories/ArticlesRepository';
import { Logger } from '../../lib/Logger';
import { GetPublishedArticlesUsecase } from '../../usecase/articles/get/GetPublishedArticlesUsecase';
import { PublishArticlesUsecase } from '../../usecase/articles/publish/PublishArticlesUsecase';

export class PublishedArticlesController {
    /**
     * getリクエストがきたときの処理
     */
    public async get(req: Request, res: Response): Promise<void> {
        // パラメータのチェック
        const classId = Number(req.query.classId);
        if (!Number.isFinite(classId)) {
            Logger.warn('パラメータが不正', classId);
            res.status(400).json({ message: 'classIdが不正です' });
        }

        // クエリサービスのインスタンス化
        const queryService = new PublishedArticlesQueryService();
        const usecase = new GetPublishedArticlesUsecase(queryService);
        try {
            // ユースケースの実行
            const articles = await usecase.exec(classId);
            const responseBody = { articles };
            Logger.info('OK Response', responseBody);
            res.status(200).json(responseBody);
        } catch (error) {
            Logger.error('公開済み学級だよりの取得に失敗しました', error);
            res.status(500).json({ message: error.message });
        }
    }

    /**
     * postリクエストがきたときの処理
     */
    public async post(req: Request, res: Response): Promise<void> {
        // リクエストパラメータのチェック
        const articleId = Number(req.params.articleId);
        if (!Number.isFinite(articleId)) {
            Logger.warn('パラメータが不正', articleId);
            res.status(400).json({ message: 'articleIdが不正です' });
        }

        // ユースケースの実行＆レスポンス
        const repository = new ArticlesRepository();
        const usecase = new PublishArticlesUsecase(repository);
        try {
            await usecase.exec(articleId);
            const responseBody = {
                message: '学級だよりの公開に成功しました。',
            };
            Logger.info('OK Response', responseBody);
            res.status(200).json(responseBody);
        } catch (error) {
            Logger.error('学級だよりの公開に失敗しました', error);
            res.status(500).json({ message: error.message });
        }
    }
}
