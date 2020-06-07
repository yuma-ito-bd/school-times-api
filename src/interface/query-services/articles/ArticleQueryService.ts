import { ArticleQueryServiceInterface } from '../../../usecase/article/ArticleQueryService';
import { db } from '../../../../db/models/index';
import { FindAllResult } from './ArticlesQueryResult';
import { GetArticlesByAuthorIdResult } from '../../../usecase/article/GetArticlesByAuthorIdResult';

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

        const options: any = {
            where: { deleteFlg: false, authorId },
            order: [['createTime', 'desc']],
            include: [
                {
                    model: db.Users,
                    required: true,
                },
            ],
        };

        const result: FindAllResult[] = await db.Articles.findAll(options);
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
