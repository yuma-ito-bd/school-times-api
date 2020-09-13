import { ArticleRepositoryInterface } from '../../../domain/articles/ArticleRepository';
import { Logger } from '../../../lib/Logger';

export class PublishArticlesUsecase {
    constructor(private repository: ArticleRepositoryInterface) {}

    /**
     * exec
     */
    public async exec(articleId: number): Promise<void> {
        Logger.info('PublishArticlesUsecase.exec called', { articleId });

        const updatedNum = await this.repository.publish(articleId);
        if (!updatedNum) {
            throw new Error('公開対象の学級だよりがありません');
        }

        Logger.info('PublishArticlesUsecase.exec success!');
    }
}
