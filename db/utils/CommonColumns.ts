import { DataTypes } from 'sequelize';

/**
 * すべてのテーブルに存在するカラム情報
 */
export const COMMON_COLUMNS = {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    createTime: {
        field: 'create_time',
        type: DataTypes.DATE,
        allowNull: false,
    },
    updateTime: {
        field: 'update_time',
        type: DataTypes.DATE,
        allowNull: false,
    },
    deleteFlg: {
        field: 'delete_flg',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
};
