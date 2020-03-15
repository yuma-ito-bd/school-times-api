import { Sequelize } from 'sequelize';
import { Users } from '../models/Users';

export const usersFactory = (sequelize: Sequelize): typeof Users => {
    Users.initialize(sequelize);
    return Users;
};
