import { ARTICLE_STATUS } from '../../domain/articles/ArticleStatus';
import { ArticlesTableModel } from '../../infrastructure/db/models/ArticlesTableModel';

export type CreateArticleRequest = {
    title: string;
    contents: string;
    authorId: number;
    status: ARTICLE_STATUS;
};

export type CreateArticleResponse = ArticlesTableModel;
