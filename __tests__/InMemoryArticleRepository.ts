import { ArticleRepositoryInterface } from '../src/usecase/article/ArticleRepository';
import { Article } from '../src/domain/articles/Article';

export class InMemoryArticleRepository implements ArticleRepositoryInterface {
    public articleStore: Article[] = [];

    /**
     * create
     */
    public create(article: Article): void {
        this.articleStore.push(article);
    }
}
