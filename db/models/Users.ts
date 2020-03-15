import { Sequelize, Model, DataTypes } from 'sequelize';
import { format } from 'date-fns';
import { SCHEMA_NAME } from './Schema';
import { Articles } from './Articles';

const TABLE_NAME = 'users';

class Users extends Model {
    public id!: number;
    public createTime!: Date;
    public updateTime!: Date;
    public deleteFlg!: boolean;
    public name!: string;
    public schoolId!: string;
    public classId!: string;
    /** 属性（1:保護者, 2:先生, 3:管理者） */
    public attribute!: string;

    public static initialize(sequelize: Sequelize): void {
        this.init(
            {
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
                    get(this: Users): unknown {
                        const dateVal: Date | null = this.getDataValue(
                            'createTime'
                        );
                        if (!dateVal) return '';
                        else return format(dateVal, 'yyyy-MM-dd HH:mm:ss');
                    },
                },
                updateTime: {
                    field: 'update_time',
                    type: DataTypes.DATE,
                    allowNull: false,
                    get(this: Users): unknown {
                        const dateVal: Date | null = this.getDataValue(
                            'updateTime'
                        );
                        if (!dateVal) return '';
                        else return format(dateVal, 'yyyy-MM-dd HH:mm:ss');
                    },
                },
                deleteFlg: {
                    field: 'delete_flg',
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                name: {
                    field: 'name',
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                schoolId: {
                    field: 'school_id',
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                classId: {
                    field: 'class_id',
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                attribute: {
                    field: 'attribute',
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
        Users.hasMany(Articles, {
            foreignKey: 'author_id',
        });
    }
}

export { Users };
