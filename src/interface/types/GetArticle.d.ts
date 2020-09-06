import { GetArticlesByAuthorIdResult } from '../../usecase/articles/get/GetArticlesByAuthorIdResult';

export type GetArticleRequest = {
    articleId?: number;
    authorId?: number;
    status?: number;
};

export type GetArticleResponse = {
    articles: GetArticlesByAuthorIdResult[];
};
