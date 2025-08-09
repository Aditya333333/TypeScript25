
//do not used object it's wrong way
// let myObj = {
//     name:"aditya",
//     age:23
// }
// console.log(myObj);

// it's used function basic object it right way used
function myObject({ name: string, age: number }) { }
// myObject({name:"aditya",age:23})

function myObjects({name,age}:{name:string,age:number}){
console.log("Name:", name);
  console.log("Age:", age);
}
let newUser = {name:"aditya",age:23,email:"aditya@gmail.com"}
myObjects(newUser)


function retuMyObject():{name:string, age:number} {
  return{name:"rahul",age:26}  
}
// console.log(retuMyObject());

function retuMyObjects(): { name: string; age: number }[] {
  return [
    { name: "rahul", age: 26 },
    { name: "aditya", age: 23 }
  ];
}
// console.log(retuMyObjects());


//+++++++++++++++++++++TypesofAliases++++++++++++++++++++++++++
// type User = { name: string, age: number, isActive: boolean }
// function createUser(user: User) {
//     console.log("Name:", user.name);
//     console.log("Age:", user.age);
//     console.log("Is Active:", user.isActive);
// }
// // createUser({ name: "patel", age: 26, isActive: true })


// type Users = { name: string, age: number, isActive: boolean }
// //return
// function createUsers(users: Users): Users {
//     return users;
// }
// console.log(createUsers({name:"patel",age:26,isActive:true}));
// console.log(createUsers({name:"raj",age:26,isActive:true}));





export { }