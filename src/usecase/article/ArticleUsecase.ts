import { ArticleRepositoryInterface } from './ArticleRepository';
import { ArticleData } from './ArticleData';

export class ArticleUsecase {
    constructor(private _articleRepository: ArticleRepositoryInterface) {}

    async getArticleList(authorId: number): Promise<ArticleData[]> {
        const result = await this._articleRepository.findByAuthorId(authorId);
        return result.map(article => new ArticleData(article));
    }
}
