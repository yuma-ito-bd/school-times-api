import { ARTICLE_STATUS } from './ArticleStatus';

export class Article {
    private _id?: number;
    readonly classId: number;
    readonly title: string;
    readonly contents: string;
    readonly authorId: number;
    readonly createTime?: Date;
    private _status: ARTICLE_STATUS;

    constructor(data: {
        title: string;
        contents: string;
        classId: number;
        authorId: number;
        status: number;
    }) {
        if (!data.classId)
            throw new Error(`クラスIDが不正です [classId: ${data.classId}]`);
        if (!data.authorId)
            throw new Error(`作成者IDが不正です [authorId: ${data.authorId}]`);
        if (
            !(
                data.status == ARTICLE_STATUS.DRAFT ||
                data.status == ARTICLE_STATUS.UNPUBLISHED
            )
        ) {
            throw new Error(`状態が不正です [status: ${data.status}]`);
        }

        this.title = data.title || 'no title';
        this.contents = data.contents || 'no contents';
        this.classId = data.classId;
        this.authorId = data.authorId;
        this._status = data.status;
    }

    /**
     * 記事を公開状態にする
     */
    public publish(): void {
        this._status = ARTICLE_STATUS.PUBLISHED;
    }

    public get status(): ARTICLE_STATUS {
        return this._status;
    }

    public get id(): number {
        if (!this._id) throw new Error('idがnullです');

        return this._id;
    }
}
