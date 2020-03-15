import { ArticleData } from '../usecase/article/ArticleData';

export type GetArticleRequest = {
    articleId: number;
    authorId: number;
    status: number;
};

export type GetArticleResponse = {
    articles: ArticleData[];
};
