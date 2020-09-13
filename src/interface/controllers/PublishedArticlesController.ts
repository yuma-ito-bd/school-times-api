import { Response, Request } from 'express';
import { ArticlesRepository } from '../../infrastructure/repositories/ArticlesRepository';
import { Logger } from '../../lib/Logger';
import { PublishArticlesUsecase } from '../../usecase/articles/publish/PublishArticlesUsecase';

export class PublishedArticlesController {
    /**
     * getリクエストがきたときの処理
     */
    public async get(req: Request, res: Response): Promise<void> {
        // TODO パラメータのチェック
        // TODO クエリサービスのインスタンス化
        // TODO ユースケースの実行
        // TODO レスポンス
        res.status(200).json({ message: 'ok' });
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
