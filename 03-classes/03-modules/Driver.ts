import { Client } from './Client';

let myClient = new Client('enrique', 'sotomayor');
console.log(myClient.firstName); // behind the scenes ts will call the appropriate accessors
console.log(myClient.lastName); 