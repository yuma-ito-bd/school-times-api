import { UserAttribute } from './UserAttribute';

export type UserInput = {
    id: number;
    name: string;
    schoolId: number;
    classId: number;
    attribute: number;
};

export class User {
    private _id: number;
    private _name: string;
    private _schoolId: number;
    private _classId: number;
    private _attribute: UserAttribute;

    constructor(data: UserInput) {
        this._checkInput(data);

        this._id = data.id;
        this._name = data.name;
        this._schoolId = data.schoolId;
        this._classId = data.classId;
        this._attribute = new UserAttribute(data.attribute);
    }

    /**
     * 引数を検証する
     * @param data
     */
    private _checkInput(data: UserInput): void {
        if (
            data.id &&
            data.name &&
            data.schoolId &&
            data.classId &&
            data.attribute
        ) {
            return;
        }
        throw new Error(`引数が不正です [${JSON.stringify(data)}]`);
    }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get schoolId(): number {
        return this._schoolId;
    }
    get classId(): number {
        return this._classId;
    }
    get attribute(): UserAttribute {
        return this._attribute;
    }
}
