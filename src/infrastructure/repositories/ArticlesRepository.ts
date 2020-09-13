import { Article } from '../../domain/articles/Article';
import { ArticleRepositoryInterface } from '../../domain/articles/ArticleRepository';
import { ARTICLE_STATUS } from '../../domain/articles/ArticleStatus';
import { Logger } from '../../lib/Logger';
import { db } from '../db/models';
import { ArticlesTableModel } from '../db/models/ArticlesTableModel';

export class ArticlesRepository implements ArticleRepositoryInterface {
    create(article: Article): void {
        throw new Error('Method not implemented.');
    }

    /**
     * 対象の学級だよりのステータスを公開済みにする
     * @param id 公開対象学級だよりのID
     */
    async publish(id: number): Promise<number> {
        Logger.info('ArticlesRepository.publish called', { id });

        const tran = await db.sequelize.transaction();
        try {
            const [updateNum, articles]: [
                number,
                ArticlesTableModel[]
            ] = await db.Articles.update<ArticlesTableModel>(
                {
                    status: ARTICLE_STATUS.PUBLISHED,
                },
                {
                    where: {
                        id,
                        deleteFlg: false,
                    },
                    transaction: tran,
                    returning: true,
                }
            );
            await tran.commit();

            Logger.info('ArticlesRepository.publish success', {
                updateNum,
                articles,
            });
            return updateNum;
        } catch (error) {
            await tran.rollback();
            Logger.error(`ArticlesRepository.publish error`, error);
            throw error;
        }
    }
}
