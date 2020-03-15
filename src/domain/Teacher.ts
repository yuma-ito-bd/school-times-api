export class Teacher {
    private _id: number;
    private _name: string;
    private _schoolId: number;
    private _classId: number;

    constructor(data: Partial<Teacher>) {
        this._checkInput(data);

        this._id = data.id;
        this._name = data.name;
        this._schoolId = data.schoolId;
        this._classId = data.classId;
    }

    /**
     * 引数を検証する
     * @param data
     */
    private _checkInput(data: Partial<Teacher>): void {
        if (data.id && data.name && data.schoolId && data.classId) {
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
}
