export enum ARTICLE_STATUS {
    /** 一時保存（未申請） */
    DRAFT = 0,
    /** 申請済みで未公開 */
    UNPUBLISHED = 1,
    /** 公開済み */
    PUBLISHED = 2,
}

export class Article {
    private _id: number;
    private _author: string;
    private _status: ARTICLE_STATUS;
    private _title: string;
    private _contents: string;

    constructor(data: Partial<Article>) {
        if (!data.id) throw new Error('IDが不正です');
        if (!data.author) throw new Error('作成者が不正です');
        if (!data.status) throw new Error('状態が不正です');

        this._id = data.id;
        this._author = data.author;
        this._status = data.status;
        this._title = data.title || '';
        this._contents = data.contents || '';
    }

    get id(): number {
        return this._id;
    }

    get author(): string {
        return this._author;
    }

    get status(): ARTICLE_STATUS {
        return this._status;
    }

    get title(): string {
        return this._title;
    }

    get contents(): string {
        return this._contents;
    }
}
