import { Article } from './Article';

export interface ArticleRepositoryInterface {
    create(article: Article): void;
}
