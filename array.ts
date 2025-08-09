const arr:number[] = [1,2,3,4]
console.log(arr);
arr.push(78)
console.log(arr);


const names: string[] = ["aditya","rahul"];
console.log(names);
names.push("neha")
console.log(names);

const name: readonly string[] = ["Dylan"];
// name.push("Jack");   // can't push the value beacuse apply a readonly

//// tuples
let tup:number[]= [1,2]
console.log(tup);

let tupl:(string| number)[] =[1,"aditya"]
console.log(tupl);

let tuple:[string,number]=["aditya",23]
console.log(tuple);




export {}
