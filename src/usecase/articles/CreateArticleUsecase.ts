import { ArticleRepositoryInterface } from '../../domain/articles/ArticleRepository';
import { CreateArticleParams } from './create/CreateArticleParams';
import { Article } from '../../domain/articles/Article';

export class CreateArticleUsecase {
    constructor(private _repository: ArticleRepositoryInterface) {}

    /**
     * 学級だよりを作成する
     */
    public createArticle(params: CreateArticleParams): void {
        const article = new Article(params);
        this._repository.create(article);
    }
}
