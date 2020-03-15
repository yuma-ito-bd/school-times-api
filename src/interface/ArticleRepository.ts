import { ArticleRepositoryInterface } from '../usecase/article/ArticleRepository';
import { Article } from '../domain/Article';

export class ArticleRepository implements ArticleRepositoryInterface {
    async findByAuthorId(): Promise<Article[]> {
        // TODO: DBにクエリ
        return [new Article({ id: 1, author: '山田先生', status: 2 })];
    }
}
