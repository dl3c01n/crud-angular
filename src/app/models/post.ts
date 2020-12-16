export class Post {
    private _userId: Number;
    private _id: Number;
    private _title: String;
    private _body: String;

    constructor(userId: number, id: number, title: string, body: string){
        this._userId = userId
        this._id = id
        this._title = title
        this._body = body
    }
}