import { Request, Response, Router } from 'express';
import { articlesController } from '../controllers/ArticlesController';
import { GetArticleRequest } from '../types/GetArticle';
import { Logger } from '../../lib/Logger';
import { PublishedArticlesController } from '../controllers/PublishedArticlesController';

// Routerはルーティング以外のことはしない方がよい。パラメータの受け取りやレスポンスの生成はコントローラで行う。
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
articlesRouter.put('/:articleId', (req: Request, res: Response) =>
    articlesController.put(req, res)
);
articlesRouter.delete('/:articleId', (req: Request, res: Response) =>
    articlesController.delete(req, res)
);

articlesRouter.get('/published', (req: Request, res: Response) =>
    new PublishedArticlesController().get(req, res)
);
articlesRouter.post('/published/:articleId', (req: Request, res: Response) =>
    new PublishedArticlesController().post(req, res)
);

export { articlesRouter };
