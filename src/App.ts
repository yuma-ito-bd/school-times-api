import express from 'express';
import { router as usersRouter } from './routes/users';
import { deepHealthRouter } from './routes/DeepHealthCheckRouter';
import { articlesRouter } from './routes/ArticlesRouter';

/**
 *  Express app
 */
export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.setRouter();
    }

    /**
     * App routes.
     * app.METHOD(PATH, HANDLER)
     */
    private setRouter(): void {
        this.app.use('/users', usersRouter);
        this.app.use('/deepHealthCheck', deepHealthRouter);
        this.app.use('/articles', articlesRouter);
    }
}
