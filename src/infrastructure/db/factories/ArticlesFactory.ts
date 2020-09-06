import { Sequelize } from 'sequelize';
import { ArticlesTableModel } from '../models/ArticlesTableModel';

export const articlesFactory = (
    sequelize: Sequelize
): typeof ArticlesTableModel => {
    ArticlesTableModel.initialize(sequelize);
    return ArticlesTableModel;
};
