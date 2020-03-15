const valueList: number[] = [
    1, // 保護者
    2, // 先生
    3, // 管理者
];

/**
 * ユーザー属性の値オブジェクト
 */
export class UserAttribute {
    constructor(private _value: number) {
        if (!valueList.includes(_value)) {
            throw new Error(`値が不正です。[value: ${_value}]`);
        }
    }

    get value(): number {
        return this._value;
    }
}
