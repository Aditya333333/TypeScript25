type user = {
    readonly id :number
    name:string
    age:number
    cardno?:number

}

interface user1 {
    readonly id :number,
    name:string,
    age:number,
    cardno?:number,

}
interface user1{
    rollno:number
}
//type
const adi:user={id:12,name:"aditya",age:34,}
console.log(adi);
//interface
const ad:user1={id:12,name:"aditya",age:34,rollno:23}

console.log(ad);

export {}