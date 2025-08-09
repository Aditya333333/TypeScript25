// type
type person1={name:string}
type person2={age:number}

type personDetail = person1 & person2;

const persondet : personDetail ={
    name:"aditya",
    age:23
}
console.log(persondet);
// interface
interface child1{name:string}
interface child2{age:number}
type ChildDetail = child1 & child2;
const children : ChildDetail ={
    name:"raj",
    age:18
}
console.log(children);


export {}