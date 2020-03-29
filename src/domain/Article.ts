export enum ARTICLE_STATUS {
    /** 一時保存（未申請） */
    DRAFT = 0,
    /** 申請済みで未公開 */
    UNPUBLISHED = 1,
    /** 公開済み */
    PUBLISHED = 2,
}

export class Article {
    readonly id: number;
    readonly createTime: Date;
    readonly author: string;
    readonly status: ARTICLE_STATUS;
    readonly title: string;
    readonly contents: string;

    constructor(data: Partial<Article>) {
        if (!data.id) throw new Error(`IDが不正です [${data.id}]`);
        if (!data.createTime)
            throw new Error(`作成日時が不正です [${data.createTime}]`);
        if (!data.author) throw new Error(`作成者が不正です [${data.author}]`);
        if (
            data.status == null ||
            !Object.values(ARTICLE_STATUS).includes(data.status)
        ) {
            throw new Error(`状態が不正です [${data.status}]`);
        }

        this.id = data.id;
        this.createTime = data.createTime;
        this.author = data.author;
        this.status = data.status;
        this.title = data.title || '';
        this.contents = data.contents || '';
    }
}
