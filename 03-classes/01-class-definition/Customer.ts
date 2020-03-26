class Customer {
    // properties
    firstName: string;
    lastName: string;

    // constructor
    // must use 'this' to refer to properties of this class
    constructor(first: string = '', last: string = '') {
        this.firstName = first;
        this.lastName = last;
    }
}

let myCustomer = new Customer();
myCustomer.firstName = 'enrique';
myCustomer.lastName = 'sotomayor';
console.log(`my customer: ${myCustomer.firstName} ${myCustomer.lastName}`)

let yourCustomer = new Customer('james', 'bond');
console.log(`my customer: ${yourCustomer.firstName} ${yourCustomer.lastName}`)


// access modifiers:
// default: public -> property is accessible to all classess
// protected -> property is only accessible in the current class and subclasses
// private -> property is only accessible in the current class