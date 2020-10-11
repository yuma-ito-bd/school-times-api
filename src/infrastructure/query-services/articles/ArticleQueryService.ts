import { ArticleQueryServiceInterface } from '../../../usecase/articles/get/ArticleQueryService';
import { db } from '../../db/models/index';
import { ArticleWithUser } from './ArticlesQueryResult';
import { GetArticlesByAuthorIdResult } from '../../../usecase/articles/get/GetArticlesByAuthorIdResult';
import { FindOptions } from 'sequelize/types';

/**
 * 学級だよりの参照用サービスクラス
 */
export class ArticleQueryService implements ArticleQueryServiceInterface {
    async getArticlesByAuthorId(
        authorId: number
    ): Promise<GetArticlesByAuthorIdResult[]> {
        if (!authorId) {
            throw new Error(`authorIdが不正です。[authorId: ${authorId}]`);
        }

        const options: FindOptions = {
            where: { deleteFlg: false, authorId },
            order: [['createTime', 'desc']],
            include: [
                {
                    model: db.Users,
                    required: true,
                },
            ],
        };

        const result = ((await db.Articles.findAll(
            options
        )) as unknown) as ArticleWithUser[];
        return result.map(data => {
            return {
                id: data.id,
                createTime: data.createTime,
                author: data.User.name,
                status: data.status,
                title: data.title,
                contents: data.contents,
            };
        });
    }
}
