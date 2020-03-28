import { Article } from '../domain/Article';

export type GetArticleRequest = {
    articleId?: number;
    authorId?: number;
    status?: number;
};

export type GetArticleResponse = {
    articles: Article[];
};
