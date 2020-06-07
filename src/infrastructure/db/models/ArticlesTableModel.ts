import { Sequelize, Model, DataTypes } from 'sequelize';
import { SCHEMA_NAME } from './Schema';
import { Users } from './Users';
import { COMMON_COLUMNS } from '../utils/CommonColumns';

const TABLE_NAME = 'articles';

export class ArticlesTableModel extends Model {
    public id!: number;
    public createTime!: Date;
    public updateTime!: Date;
    public deleteFlg!: boolean;
    public title?: string;
    public contents?: string;
    public authorId!: number;
    public status!: number;

    public static initialize(sequelize: Sequelize): void {
        this.init(
            {
                ...COMMON_COLUMNS,
                title: {
                    field: 'title',
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                contents: {
                    field: 'contents',
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                authorId: {
                    field: 'author_id',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                status: {
                    field: 'status',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                tableName: TABLE_NAME,
                schema: SCHEMA_NAME,
                sequelize,
                timestamps: true,
                createdAt: 'createTime',
                updatedAt: 'updateTime',
            }
        );
    }

    public static associate(): void {
        ArticlesTableModel.belongsTo(Users, {
            foreignKey: 'author_id',
            targetKey: 'id',
        });
    }
}
