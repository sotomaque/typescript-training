class Shopper {
    // properties
    // private _firstName: string;
    // private _lastName: string;
    // constructor(first: string = '', last: string = '') {
    //     this._firstName = first;
    //     this._lastName = last;
    // }
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
// access modifiers:
// default: public -> property is accessible to all classess
// protected -> property is only accessible in the current class and subclasses
// private -> property is only accessible in the current class

let myShopper = new Shopper('enrique', 'sotomayor')
console.log(myShopper.firstName); // behind the scenes ts will call the appropriate accessors
console.log(myShopper.lastName); 