import { ArticlesTableModel } from './ArticlesTableModel';
import { articlesFactory } from '../factories/ArticlesFactory';
import { Users } from './Users';
import { usersFactory } from '../factories/UsersFactory';

export const models = {
    Articles: ArticlesTableModel,
    Users,
};

// プロパティ名はmodelsと一致させる
export const factories = {
    Articles: articlesFactory,
    Users: usersFactory,
};

// スキーマ指定
export const SCHEMA_NAME = 'school';
