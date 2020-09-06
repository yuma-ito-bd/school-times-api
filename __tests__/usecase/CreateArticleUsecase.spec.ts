import { CreateArticleUsecase } from '../../src/usecase/articles/create/CreateArticleUsecase';
import { InMemoryArticleRepository } from '../../src/infrastructure/repositories/InMemoryArticleRepository';
import { CreateArticleParams } from '../../src/usecase/articles/create/CreateArticleParams';

describe('CreateArticleUsecase', () => {
    let testRepository: InMemoryArticleRepository;
    let usecase: CreateArticleUsecase;

    beforeEach(() => {
        testRepository = new InMemoryArticleRepository();
        usecase = new CreateArticleUsecase(testRepository);
    });

    it('正常に作成できるか', () => {
        const params: CreateArticleParams = {
            title: 'test',
            contents: '本文',
            classId: 1,
            authorId: 1,
            status: 0,
        };
        usecase.createArticle(params);
        const result = testRepository.articleStore.some(element => {
            return (
                element.title === params.title &&
                element.contents === params.contents &&
                element.classId === params.classId &&
                element.authorId === params.authorId &&
                element.status === params.status
            );
        });

        expect(result).toBeTruthy();
    });
});
