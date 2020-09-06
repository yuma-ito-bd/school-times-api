import { Request, Response, Router } from 'express';
import { deepHealthCheckController } from '../controllers/DeepHealthCheckController';

const deepHealthRouter = Router();

deepHealthRouter.get('/', (req: Request, res: Response) =>
    deepHealthCheckController.get(req, res)
);

export { deepHealthRouter };
