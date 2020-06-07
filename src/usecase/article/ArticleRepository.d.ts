import { Article } from '../../domain/articles/Article';

export interface ArticleRepositoryInterface {
    create(article: Article): void;
}
