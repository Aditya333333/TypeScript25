
let score : string | number

score =23
// console.log(score);
// console.log(typeof score);

score= "34"
// console.log(score);
// console.log(typeof score);


type user1 = {
    name:string,
    id:number
}

type Admin = {
    name:string,
    id:number
}

let Aditya :user1 | Admin = { name:"aditya",id:32}
// console.log(Aditya);

Aditya = { name:"adityaraj",id:31}
// console.log(Aditya);

function strNum(id: string | number) {
    // console.log(`it's a string or number ${id}`);
    
}
strNum(3)

strNum("45")

//Array

let arruni:number[] = [1,2,3,4]
console.log(arruni);
// string/number
let arr1: (string | number)[] = [1,2,3,"4"]
console.log(arr1);
//any
let arr2:any[] = [1,2,3,"4",true]
console.log(arr2);





export {}