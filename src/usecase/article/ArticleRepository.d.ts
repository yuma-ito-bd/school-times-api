import { Article } from '../../domain/Article';

export interface ArticleRepositoryInterface {
    findByAuthorId(authorId: number): Promise<Article[]>;
}
