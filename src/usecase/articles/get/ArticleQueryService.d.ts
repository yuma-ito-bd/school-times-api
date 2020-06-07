import { GetArticlesByAuthorIdResult } from './GetArticlesByAuthorIdResult';

export interface ArticleQueryServiceInterface {
    getArticlesByAuthorId(
        authorId: number
    ): Promise<GetArticlesByAuthorIdResult[]>;
}
