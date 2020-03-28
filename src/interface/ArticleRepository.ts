import { ArticleRepositoryInterface } from '../usecase/article/ArticleRepository';
import { Article } from '../domain/Article';
import { db } from '../../db/models/index';
import { FindAllResult } from './repositories/articles/ArticlesQueryResult';
export class ArticleRepository implements ArticleRepositoryInterface {
    async findByAuthorId(authorId: number): Promise<Article[]> {
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
            return new Article({
                id: data.id,
                createTime: data.createTime,
                author: data.User.name,
                status: data.status,
                title: data.title,
                contents: data.contents,
            });
        });
    }
}
