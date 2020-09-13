import { Logger } from '../../../lib/Logger';
import {
    PublishedArticle,
    PublishedArticlesQueryServiceInterface,
} from './PublishedArticlesQueryService';

export class GetPublishedArticlesUsecase {
    constructor(private query: PublishedArticlesQueryServiceInterface) {}

    /**
     * exec
     */
    public async exec(classId: number): Promise<PublishedArticle[]> {
        Logger.info('GetPublishedArticlesUsecase.exec called', { classId });

        const articles = await this.query.fetchByClassId(classId);
        Logger.info('GetPublishedArticlesUsecase.exec success', { articles });
        return articles;
    }
}
