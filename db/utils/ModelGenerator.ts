import { Sequelize, Op } from 'sequelize';
import { models } from '../models/Schema';

export default class ModelGenerater {
    public sequelize: Sequelize;

    public constructor(dbConfig: any) {
        this.sequelize = new Sequelize(dbConfig, {
            pool: {
                max: 30,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });
    }
}

export const connectModelGenerate = (dbConfig: any) => {
    const modelGenerator = new ModelGenerater(dbConfig);

    return (setModel: any) => {
        const db: SchoolTimesDB = setModel(modelGenerator.sequelize);

        return {
            ...db,
            Sequelize,
            sequelize: modelGenerator.sequelize,
            Op,
        };
    };
};

export declare interface SchoolTimesDB {
    Articles: typeof models.Articles;
}
