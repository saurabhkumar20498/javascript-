// Dates


let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//let myCreatedDate= new Date(2024,1,22)
//let myCreatedDate= new Date(2024,1,22,5,4)
//let myCreatedDate= new Date("2024-01-24")
let myCreatedDate= new Date("01-01-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDate()}`

newDate.toLocaleString('default',{
    weekday: "long",
})