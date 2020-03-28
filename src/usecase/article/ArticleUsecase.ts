import { ArticleRepositoryInterface } from './ArticleRepository';
import { Article } from '../../domain/Article';

export class ArticleUsecase {
    constructor(private _articleRepository: ArticleRepositoryInterface) {}

    async getArticleList(authorId: number): Promise<Article[]> {
        return await this._articleRepository.findByAuthorId(authorId);
    }
}
