import { Sequelize } from 'sequelize';
import { SchoolTimesDB, connectModelGenerate } from '../utils/ModelGenerator';
import schema from './Schema';

const setModel = (sequelize: Sequelize): SchoolTimesDB => {
    const db: any = {};

    Object.keys(schema).forEach(tableName => {
        db[tableName] = schema[tableName].factory(sequelize);
    });

    // associationを貼るのは各Modelのinit()が全て終わってから
    // (全モデルのinit()が終わる前にassociationを貼るとそんなモデル知らないみたいなエラーで死ぬ）
    Object.keys(schema).forEach(tableName => {
        if ('associate' in db[tableName]) {
            db[tableName].associate(db);
        }
    });

    return db;
};

const modelGenerator = connectModelGenerate(process.env.DATABASE_URL);
const db = modelGenerator(setModel);

export default db;
