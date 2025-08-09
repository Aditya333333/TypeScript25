type User={
    readonly _id :string,
    name:string,
    email:string,
    isActive:boolean,
    cardNumber?:number  //not pass a new user to use without add card
}
let myuser:User={
    _id:"101",
    name:'aditya',
    email:"raj@gmail.com",
    isActive:true
}
// myuser.id ="102" //can't use it apply a randonly
myuser.email = "adityaraj@gmail.com"
console.log(myuser);

type cardNumber ={
    cardnumber:number
}
type cardDate ={
    cardDate:string
}
type cardDetails = cardNumber & cardDate &{
    cvv:number
}




export {}
