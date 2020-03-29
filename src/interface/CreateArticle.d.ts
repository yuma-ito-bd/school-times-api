import { ARTICLE_STATUS } from '../domain/Article';
import { Articles } from '../../db/models/Articles';

export type CreateArticleRequest = {
    title: string;
    contents: string;
    authorId: number;
    status: ARTICLE_STATUS;
};

export type CreateArticleResponse = Articles;
