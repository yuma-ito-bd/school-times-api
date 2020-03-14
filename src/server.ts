import express from 'express';
import { router as usersRouter } from './routes/users';
import { deepHealthRouter } from './routes/DeepHealthCheckRouter';
import { Logger } from './lib/Logger';

const host: string = process.env.HOST || '0.0.0.0';
const port: number = Number(process.env.PORT) || 3000;
const env: string = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'local') {
    Logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
}

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// set router
app.use('/users', usersRouter);
app.use('/deepHealthCheck', deepHealthRouter);

// Listen the server.
export const server = app.listen(port, host, () => {
    const endpoint: string =
        host === '0.0.0.0' ? 'localhost' : `http://${host}`;
    Logger.info(`Server listening on ${endpoint}:${port}`);
    Logger.info('Press CTRL-C to stop');
});
