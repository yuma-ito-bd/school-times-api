import { Sequelize } from 'sequelize';
import { Articles } from '../models/Articles';

export const articleFactory = (sequelize: Sequelize): typeof Articles => {
    Articles.initialize(sequelize);
    return Articles;
};
