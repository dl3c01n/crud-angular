export class User {
    private _id: Number;
    private _nom : String;
    private _prenom: String;

    constructor(id: number, nom: string, prenom: string){
        this._id = id
        this._nom = nom
        this._prenom = prenom
    }
}