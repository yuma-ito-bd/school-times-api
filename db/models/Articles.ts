import { Sequelize, Model, DataTypes } from 'sequelize';
import { format } from 'date-fns';
import { convertToTimeZone } from 'date-fns-timezone';
import { SCHEMA_NAME } from './Schema';

const TABLE_NAME = 'articles';

class Articles extends Model {
    public id!: number;
    public createTime!: Date;
    public updateTime!: Date;
    public deleteFlg!: boolean;
    public title?: number;
    public contents?: string;
    public authorId!: number;
    public status!: number;

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
                    get(this: Articles): unknown {
                        const dateVal: Date | null = this.getDataValue(
                            'createTime'
                        );
                        if (!dateVal) return '';
                        return format(
                            convertToTimeZone(dateVal, { timeZone: 'Etc/GMT' }),
                            'yyyy-MM-dd HH:mm:ss'
                        );
                    },
                },
                updateTime: {
                    field: 'update_time',
                    type: DataTypes.DATE,
                    allowNull: false,
                    get(this: Articles): unknown {
                        const dateVal: Date | null = this.getDataValue(
                            'updateTime'
                        );
                        if (!dateVal) return '';
                        return format(
                            convertToTimeZone(dateVal, { timeZone: 'Etc/GMT' }),
                            'yyyy-MM-dd HH:mm:ss'
                        );
                    },
                },
                deleteFlg: {
                    field: 'delete_flg',
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
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
        // Articles.belongsTo(TblPushNotificationInfo, {
        //     foreignKey: 'pushNotificationId',
        //     targetKey: 'id',
        //     constraints: true,
        //     as: 'pushNotificationInfo',
        // });
    }
}

export { Articles };
