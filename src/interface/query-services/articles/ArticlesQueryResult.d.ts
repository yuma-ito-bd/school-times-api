import { Users } from '../../../../db/models/Users';

export type FindAllResult = {
    id: number;
    createTime: Date;
    updateTime: Date;
    deleteFlg: boolean;
    title?: string;
    contents?: string;
    authorId: number;
    status: number;
    User: Users;
};
