// let <variable name> : <variable type> = <variable value>

// i.e. 

let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "enrique";
let lastName: string = 'sotomayor';

// notice you can use either double 

// bc tsc is strongly typed, we cannot reassign a variable a value that is not of the same type
// i.e. found = 43; // error

// we can use the any keyword for this
let myData: any = 50.0; 
// we mainly use any for generics i.e. lists etc. 

// when printing concatonation can become clumbsy

//i.e. the need for template strings
console.log(`hi ${firstName}`)