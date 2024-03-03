//const tinder = new Object()
const tinderuser ={}

tinderuser.id="1234wtwy"
tinderuser.name="saurabh"
tinderuser.isloggedin=false
//console.log(tinderuser);

const reguleruser={
    email:"@gmail.com",
    fullname:{
         userfullname:{
            firstname:"saurabh",
            lastname:"kumar"
         }
    }
}
//console.log(reguleruser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}
const obj4={7:"a",8:"b",9:"c"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1, ...obj2}
//console.log(obj3);

const user=[
    {
        id:"L@123",
        name:"saurabh"
    },
    {
        id:"L@123",
        name:"saurabh"
    },
    {
        id:"L@123",
        name:"saurabh"
    }
]
user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('islogged'));

const course={
    coursename:"MCA",
    price:"200000",
    courseinstractor:"saurabh"

}
//course.courseinstractor

const{courseinstractor}= course
console.log(courseinstractor);



{
    name:"saurabh",
    coursename:"mca",
    price:"free"

}

[
    {},
    {},
]




