//  function an added a two number
function addNum(num:number):number {

   return num + 2;
//    return "hello"
}
let myVal = addNum(5)

console.log(addNum(5));

function user(name:string){
    name.toUpperCase;
    console.log(name);  
}
user("aditya")

function UserOne(name:string,email:string,id:number) {
    console.log(name,email,id);
    name.toUpperCase;
    email.toUpperCase;  
}

UserOne("aditya","adityaraj@gmail.com",101)

let UserTwo = (name:string,email:string,id:boolean = false) =>{}
UserTwo("aditya","rahul@gmail.com",true)
UserTwo("aditya raja","raja@gmail.com")


// function mutipara(myVal:number):boolean {
//     if (myVal > 5) {
//        return true 
//     }
//     return "true"
// }


let arrfun = (s:string):string =>{
return ""
}

 const heros = ["thor","spiderman","batman"];
// const heros = [1,2,3]
heros.map(heros =>{
    return `hero is a ${heros}`
})

heros.map((heros):string =>{
    return `hero is a ${heros}`
})

function consoleError(errmsg:string):void {
    console.log(errmsg);
    // return errmsg   // can't used return 
    
}


function handlerError(errmsg:string): never{
    throw new console.error(errmsg);
   
}


// console.log(heros);








export{};