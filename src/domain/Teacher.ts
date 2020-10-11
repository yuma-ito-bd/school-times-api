export class Teacher {
    readonly id: number;
    readonly name: string;
    readonly schoolId: number;
    readonly classId: number;

    constructor(data: Partial<Teacher>) {
        const params = this._checkInput(data);

        this.id = params.id;
        this.name = params.name;
        this.schoolId = params.schoolId;
        this.classId = params.classId;
    }

    /**
     * 引数を検証する
     * @param data
     */
    private _checkInput(
        data: Partial<Teacher>
    ): { [P in keyof Teacher]: Teacher[P] } {
        const { id, name, schoolId, classId } = data;
        if (id && name && schoolId && classId) {
            return { id, name, schoolId, classId };
        }
        throw new Error(`引数が不正です [${JSON.stringify(data)}]`);
    }
}
