import { Request, Response, Router } from 'express';
import { articlesController } from '../controllers/ArticlesController';

const articlesRouter = Router();

articlesRouter.get('/', (req: Request, res: Response) =>
    articlesController.get(req, res)
);

export { articlesRouter };
