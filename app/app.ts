import express from 'express';
import { router } from './routes/users';

const usersRouter = router;

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/users', usersRouter);

// module.exports = app;
app.listen(3000, () => {
    console.log('Server is listning');
});
