import express from 'express';
import { deepHealthRouter } from './DeepHealthCheckRouter';
import { articlesRouter } from './ArticlesRouter';

/**
 *  Express app
 */
export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        this.setRouter();
    }

    /**
     * App routes.
     * app.METHOD(PATH, HANDLER)
     */
    private setRouter(): void {
        this.app.use('/deepHealthCheck', deepHealthRouter);
        this.app.use('/articles', articlesRouter);
    }
}
