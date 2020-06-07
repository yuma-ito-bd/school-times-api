import { Article, ARTICLE_STATUS } from '../../domain/Article';

export class ArticleData {
    id: number;
    author: string;
    status: ARTICLE_STATUS;
    title: string;
    contents: string;

    constructor(article: Article) {
        this.id = article.id;
        this.author = article.author;
        this.status = article.status;
        this.title = article.title;
        this.contents = article.contents;
    }
}
