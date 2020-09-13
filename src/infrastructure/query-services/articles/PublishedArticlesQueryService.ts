import { FindOptions } from 'sequelize/types';
import {
    PublishedArticle,
    PublishedArticlesQueryServiceInterface,
} from '../../../usecase/articles/get/PublishedArticlesQueryService';
import { db } from '../../db/models';
import { Users } from '../../db/models/Users';

export class PublishedArticlesQueryService
    implements PublishedArticlesQueryServiceInterface {
    /**
     * 指定されたクラスの公開済み学級だよりを取得する
     * @param classId 対象のクラスID
     */
    async fetchByClassId(classId: number): Promise<PublishedArticle[]> {
        const options: FindOptions = {
            where: { deleteFlg: false, classId },
            order: [['createTime', 'desc']],
            include: [
                {
                    model: db.Users,
                    required: true,
                },
            ],
        };

        const result: QueryResult = await db.Articles.findAll(options);
        return result.map(({ id, createTime, User, title, contents }) => {
            return {
                id,
                createTime,
                authorName: User.name,
                title,
                contents,
            };
        });
    }
}

/**
 * クエリで取得できるレコードの型
 */
type QueryResult = {
    id: number;
    createTime: Date;
    updateTime: Date;
    deleteFlg: boolean;
    title?: string;
    contents?: string;
    authorId: number;
    status: number;
    User: Users;
}[];
