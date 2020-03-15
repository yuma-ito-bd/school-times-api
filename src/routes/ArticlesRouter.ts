import { Request, Response, Router } from 'express';
import { articlesController } from '../controllers/ArticlesController';

const articlesRouter = Router();

articlesRouter.get('/', (req: Request, res: Response) =>
    articlesController.get(req, res)
);
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
