const marbel_hero=["thor","tranman","spiderman"]
const dc_hero=["superman","flash","batman"]
//marbel_hero.push(dc_hero)
//console.log(marbel_hero);
//console.log(marbel_hero[3][1]);

const allhero = marbel_hero.concat(dc_hero)
console.log(allhero);


const all_new_hero= [...marbel_hero,...dc_hero]
console.log(all_new_hero);

const anotherarray=[1,2,3,[4,5],6,7,[8,9,[1,2,3,[1,6]]]]
console.log(anotherarray.flat(Infinity));
console.log(Array.isArray("saurabh"));
console.log(Array.from("saurabh"));
console.log(Array.from({name:"saurabh"}));// intresting // output -  [] empty array


let score1=100
let score2=200
let score3=400

console.log(Array.of(score1,score2,score3));