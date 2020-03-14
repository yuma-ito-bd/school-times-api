import { Articles } from './Articles';
import { articleFactory } from '../factories/ArticlesFactory';

export const models = {
    Articles,
};

// プロパティ名はmodelsと一致させる
export const factories = {
    Articles: articleFactory,
};

// スキーマ指定
export const SCHEMA_NAME = 'school';
