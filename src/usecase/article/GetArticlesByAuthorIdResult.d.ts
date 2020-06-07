import { ARTICLE_STATUS } from '../../domain/Article';

export type GetArticlesByAuthorIdResult = {
    id: number;
    createTime: Date;
    author: string;
    status: ARTICLE_STATUS;
    title?: string;
    contents?: string;
};
