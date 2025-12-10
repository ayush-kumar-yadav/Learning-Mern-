const varId = 123;
let varMail = "ayu@gmail.com";
var varPassword = "ayu123";
varName = "Ayu";


//varId = 456;
// constant "const" is fixed cannot be changed 
varMail = "aky@gmail.com";
varPassword = "aky123";
varName = "Aky";
let varState;

console.log(varMail);
console.log(varPassword);
console.log(varName);

console.table({varId, varMail, varPassword, varName, varState});
// let is used to declare variables that can be changed later
/*
do not use var anymore bcoz of issues in scope 
 declaring without keyword is also posible but not a good practice
 declaring without a fixed value is possible with let - undefine state 
*/

//alert("Hello Ayu"); used to show popup message in browser

let name = "ayu"
let age = 20
let isloggedin = true
let str = "Hello 'Ayu' \"Welcome\" to JS"
console.log(str);
console.log( typeof str);
console.log("2" + "2"); // concatenation
console.log(2 + 2); // addition
console.log(2 + "2"); // concatenation
console.log("2" >1); 
console.log(null>=0); //true

// template literals / template strings
// to embed variables in string use backtick ``

console.log("hello my name is ${name} and my age is ${age}"); // wrong way
console.log('hello my name is ${name} and my age is ${age}'); 
console.log(`hello my name is ${name} and my age is ${age}`); // correct way using backtick ``
const word = new String("hello ayu");
console.log(word);
console.log(typeof word);
console.log(word[0]+" "+word[1]);
// use - .length , .toUpperCase() , .toLowerCase() , .slice() , .replace(),.charAt(),.indexOf() etc methods on string


