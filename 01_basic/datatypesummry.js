// Primitive

// 7 types : string , number , boolean , null , undefined, symbol, bigInt

const score=100
const scoreValue=100.8
const isloggen=false
const outsideTemp=null
let useEmail;
const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=248655665865365n;
// refrence(non primitive)

//Array , objects , functions

const hero=["shaktiman","supar","superhit"]

  let myObj={
    name:"saurabh",
    age:24,
    rollnumber:2425,
}

 const myFunction=function(){
    //console.log("hello word");
} 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//stack (Primitive), Heap (Non-Primitive)

let myname="saurabh kumar"
let anothorname=myname
anothername="Ram"
console.log(myname);
console.log(anothername); 




let userOne = {
    email: "user@123",
    upi: "user@ybl"
};

let userTwo = userOne; // Both userOne and userTwo now reference the same object

userTwo.email = "saurabh@123"; // Modifying the email property via userTwo

console.log(userOne.email); // Outputs "saurabh@123"
console.log(userTwo.email); // Outputs "saurabh@123"
