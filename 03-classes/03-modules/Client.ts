export class Client {

    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName // properties
        (value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName // properties
        (value: string) {
        this._lastName = value;
    }
}