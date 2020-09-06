import { Sequelize } from 'sequelize';
import { SchoolTimesDB, connectModelGenerate } from '../utils/ModelGenerator';
import { models, factories } from './Schema';

const setModel = (sequelize: Sequelize): SchoolTimesDB => {
    const db: any = {};

    Object.keys(models).forEach(tableName => {
        // TODO: 本当は型定義してts-ignoreを外したい
        // @ts-ignore
        db[tableName] = factories[tableName](sequelize);
    });

    // associationを貼るのは各Modelのinit()が全て終わってから
    // (全モデルのinit()が終わる前にassociationを貼るとそんなモデル知らないみたいなエラーで死ぬ）
    Object.keys(models).forEach(tableName => {
        if (db[tableName].associate) {
            db[tableName].associate(db);
        }
    });

    return db;
};

const modelGenerator = connectModelGenerate(process.env.DATABASE_URL);
const db = modelGenerator(setModel);

export { db };
