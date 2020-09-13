import { Sequelize, Model, DataTypes } from 'sequelize';
import { SCHEMA_NAME } from './Schema';
import { Users } from './Users';
import { COMMON_COLUMNS } from '../utils/CommonColumns';

const TABLE_NAME = 'articles';

export class ArticlesTableModel extends Model {
    /** 学級だよりID */
    public id!: number;
    /** 作成日時 */
    public createTime!: Date;
    /** 更新日時 */
    public updateTime!: Date;
    /** 削除フラグ */
    public deleteFlg!: boolean;
    /** タイトル */
    public title?: string;
    /** 本文 */
    public contents?: string;
    /** 作者ID */
    public authorId!: number;
    /** クラスID */
    public classId!: number;
    /** 状態（0: 下書き、1: 公開申請、2: 公開済み） */
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
                classId: {
                    field: 'class_id',
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
