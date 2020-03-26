class Shopper {
    // properties
    // private _firstName: string;
    // private _lastName: string;
    // constructor(first: string = '', last: string = '') {
    //     this._firstName = first;
    //     this._lastName = last;
    // }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName // properties
    (value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName // properties
    (value) {
        this._lastName = value;
    }
}
// access modifiers:
// default: public -> property is accessible to all classess
// protected -> property is only accessible in the current class and subclasses
// private -> property is only accessible in the current class
let myShopper = new Shopper('enrique', 'sotomayor');
console.log(myShopper.firstName); // behind the scenes ts will call the appropriate accessors
console.log(myShopper.lastName);
