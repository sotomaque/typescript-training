// let <variable name> : <variable type> = <variable value>
// i.e. 
var found = true;
var grade = 88.6;
var firstName = "enrique";
var lastName = 'sotomayor';
// notice you can use either double 
// bc tsc is strongly typed, we cannot reassign a variable a value that is not of the same type
// i.e. found = 43; // error
// we can use the any keyword for this
var myData = 50.0;
// we mainly use any for generics i.e. lists etc. 
// when printing concatonation can become clumbsy
//i.e. the need for template strings
console.log("hi " + firstName);
