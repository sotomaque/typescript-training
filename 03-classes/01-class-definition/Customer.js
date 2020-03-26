var Customer = /** @class */ (function () {
    // constructor
    // must use 'this' to refer to properties of this class
    function Customer(first, last) {
        if (first === void 0) { first = ''; }
        if (last === void 0) { last = ''; }
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = 'enrique';
myCustomer.lastName = 'sotomayor';
console.log("my customer: " + myCustomer.firstName + " " + myCustomer.lastName);
var yourCustomer = new Customer('james', 'bond');
console.log("my customer: " + yourCustomer.firstName + " " + yourCustomer.lastName);
