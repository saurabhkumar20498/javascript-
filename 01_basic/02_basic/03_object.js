//sigleton
//object.create

//object litrels

const mysym=Symbol("key1")

const jsuser={
name:"saurabh",
"full name":"saurabh kumar",
[mysym]:"mykey1",
age:24,
location:"delhi",
email:"saurabh@google.com",
login:false,
lastlogin:["monday","friday"]

}


// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);



jsuser.email="saurabh@123"
//Object.freeze(jsuser)
jsuser.email="saurabh@amazon.com"
//console.log(jsuser);


jsuser.greeting= function(){
    console.log("hell js user");
}

jsuser.greetingtwo= function(){
    console.log(`hell js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

