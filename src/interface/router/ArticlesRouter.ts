import { Request, Response, Router } from 'express';
import { articlesController } from '../controllers/ArticlesController';
import { GetArticleRequest } from '../GetArticle';
import { Logger } from '../../lib/Logger';

const articlesRouter = Router();

articlesRouter.get('/', async (req: Request, res: Response) => {
    const { id, authorId, status } = req.query;
    const params: GetArticleRequest = {
        articleId: Number(id),
        authorId: Number(authorId),
        status: Number(status),
    };
    try {
        const body = await articlesController.get(params);
        res.status(200).json(body);
    } catch (error) {
        Logger.error(`ArticleRouter.get error`, error);
        res.status(500).json({ message: `Internal Server Error.` });
    }
});

articlesRouter.post('/', (req: Request, res: Response) =>
    articlesController.post(req, res)
);
articlesRouter.patch('/:articleId', (req: Request, res: Response) =>
    articlesController.patch(req, res)
);
articlesRouter.delete('/:articleId', (req: Request, res: Response) =>
    articlesController.delete(req, res)
);

export { articlesRouter };
