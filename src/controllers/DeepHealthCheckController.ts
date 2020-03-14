import { Request, Response } from 'express';
import { db } from '../../db/models/index';
import { Logger } from '../lib/Logger';

class DeepHealthCheckController {
    /**
     * GET /deepHealthCheck
     * ディープヘルスチェックを行う
     * @param req
     * @param res
     */
    async get(req: Request, res: Response) {
        Logger.info('DeepHealthCheckController.get is called.');
        await db.sequelize
            .authenticate()
            .then(() => res.status(200).send({ status: 'healthy' }))
            .catch((error: any) => {
                Logger.error(`DeepHealthCheck error. ${error}`);
                res.status(500).send({ message: 'Internal Server Error.' });
            });
        Logger.info('DeepHealthCheckController.get is end.');
    }
}

export const deepHealthCheckController = new DeepHealthCheckController();
