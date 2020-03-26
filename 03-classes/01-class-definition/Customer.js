class Customer {
    constructor(first = '', last = '') {
        this.firstName = first;
        this.lastName = last;
    }
}
// access modifiers:
// default: public -> property is accessible to all classess
// protected -> property is only accessible in the current class and subclasses
// private -> property is only accessible in the current class
let aCustomer = new Customer('enrique', 'sotomayor');
console.log(aCustomer.firstName); // behind the scenes ts will call the appropriate accessors
