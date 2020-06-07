import { Article } from '../../src/domain/articles/Article';
import { ARTICLE_STATUS } from '../../src/domain/articles/ArticleStatus';

describe('Article', () => {
    describe('正常系', () => {
        it('正常にインスタンスを生成できるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: 1,
                authorId: 1,
                status: 0,
            };
            const article = new Article(inputData);

            expect(article.title).toBe(inputData.title);
            expect(article.contents).toBe(inputData.contents);
            expect(article.classId).toBe(inputData.classId);
            expect(article.authorId).toBe(inputData.authorId);
            expect(article.status).toBe(ARTICLE_STATUS.DRAFT);
        });

        it('公開状態にできるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: 1,
                authorId: 1,
                status: 0,
            };
            const article = new Article(inputData);

            article.publish();

            expect(article.status).toBe(ARTICLE_STATUS.PUBLISHED);
        });
    });

    describe('異常系', () => {
        it('クラスIDがnullのときにエラーになるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: null as any,
                authorId: 1,
                status: 0,
            };
            expect(() => new Article(inputData)).toThrowError(
                'クラスIDが不正です [classId: null]'
            );
        });

        it('作成者IDがnullのときにエラーになるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: 1,
                authorId: null as any,
                status: 0,
            };
            expect(() => new Article(inputData)).toThrowError(
                '作成者IDが不正です [authorId: null]'
            );
        });

        it('状態が2（公開状態）のときにエラーになるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: 1,
                authorId: 1,
                status: 2,
            };
            expect(() => new Article(inputData)).toThrowError(
                '状態が不正です [status: 2]'
            );
        });

        it('idがnullのときにgetしようとするとエラーになるか', () => {
            const inputData = {
                title: 'テスト',
                contents: '本文',
                classId: 1,
                authorId: 1,
                status: 0,
            };
            const article = new Article(inputData);
            expect(() => article.id).toThrowError('idがnullです');
        });
    });
});
