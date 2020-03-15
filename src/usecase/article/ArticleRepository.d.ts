import { Article } from '../../domain/Article';

export interface ArticleRepositoryInterface {
    findByAuthorId(id: number): Promise<Article[]>;
}
