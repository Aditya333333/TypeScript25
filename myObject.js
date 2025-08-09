"use strict";
//do not used object it's wrong way
// let myObj = {
//     name:"aditya",
//     age:23
// }
// console.log(myObj);
Object.defineProperty(exports, "__esModule", { value: true });
// it's used function basic object it right way used
function myObject(_a) {
    var string = _a.name, number = _a.age;
}
// myObject({name:"aditya",age:23})
function myObjects(_a) {
    var name = _a.name, age = _a.age;
    console.log("Name:", name);
    console.log("Age:", age);
}
var newUser = { name: "aditya", age: 23, email: "aditya@gmail.com" };
myObjects(newUser);
function retuMyObject() {
    return { name: "rahul", age: 26 };
}
// console.log(retuMyObject());
function retuMyObjects() {
    return [
        { name: "rahul", age: 26 },
        { name: "aditya", age: 23 }
    ];
}
