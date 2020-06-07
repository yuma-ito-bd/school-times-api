import { ArticleRepositoryInterface } from '../../domain/articles/ArticleRepository';
import { Article } from '../../domain/articles/Article';

export class InMemoryArticleRepository implements ArticleRepositoryInterface {
    public articleStore: Article[] = [];

    /**
     * create
     */
    public create(article: Article): void {
        this.articleStore.push(article);
    }
}
