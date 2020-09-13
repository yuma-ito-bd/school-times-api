export type PublishedArticle = {
    /** 学級だよりID */
    id: number;
    /** 作成日時 */
    createTime: Date;
    /** 作成者名 */
    authorName: string;
    /** タイトル */
    title?: string;
    /** 本文 */
    contents?: string;
};

export interface PublishedArticlesQueryServiceInterface {
    /**
     * 指定されたクラスの公開済み学級だよりを取得する
     * @param classId 対象のクラスID
     */
    fetchByClassId(classId: number): Promise<PublishedArticle[]>;
}
