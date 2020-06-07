import { ArticleQueryServiceInterface } from './ArticleQueryService';
import { GetArticlesByAuthorIdResult } from './GetArticlesByAuthorIdResult';

export class ArticleUsecase {
    constructor(private _queryService: ArticleQueryServiceInterface) {}

    /**
     * 学級だよりリストを取得する
     * @param authorId 作者ID
     */
    async getArticleList(
        authorId: number
    ): Promise<GetArticlesByAuthorIdResult[]> {
        return await this._queryService.getArticlesByAuthorId(authorId);
    }
}
