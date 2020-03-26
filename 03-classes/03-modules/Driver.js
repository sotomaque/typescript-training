"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./Client");
var myClient = new Client_1.Client('enrique', 'sotomayor');
console.log(myClient.firstName); // behind the scenes ts will call the appropriate accessors
console.log(myClient.lastName);
