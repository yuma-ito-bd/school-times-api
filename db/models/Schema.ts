import { Articles } from './Articles';
import { articleFactory } from '../factories/ArticlesFactory';
import { Users } from './Users';
import { usersFactory } from '../factories/UsersFactory';

export const models = {
    Articles,
    Users,
};

// プロパティ名はmodelsと一致させる
export const factories = {
    Articles: articleFactory,
    Users: usersFactory,
};

// スキーマ指定
export const SCHEMA_NAME = 'school';
