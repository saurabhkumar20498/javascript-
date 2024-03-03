const name="saurabh"
const repoCount=50

console.log(name+repoCount);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('saurabh-kumar-verma')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-6,4)
console.log(anotherString);
const newStringOne =" saurabh   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="http://saurabh//kuamr@gdgd6yd%50kumar"
console.log(url.replace('%50','-'));
console.log(url.includes('saurabh'));
console.log(gameName.split('-'));
let string = "5";
console.log(string.padStart(4, "0")); // Outputs "0005"
let str = "5";
console.log(str.padEnd(4, "0")); // Outputs "5000"
