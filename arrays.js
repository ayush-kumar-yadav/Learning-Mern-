/*
const arr =[0,1,2,3,4,5];
let arr2 = new Array(6,7,8,9,10);
let arr3 = ['ayu',20,true];

//zero based indexing
console.log(arr[2]);
console.log(arr2[0]);
console.log(arr3[3]);

//array methods
arr.push(6); //adds element at the end
console.log(arr); 
arr.pop(); //removes element from the end
console.log(arr);
arr.shift(); //removes element from the start
console.log(arr);
arr.unshift(-1); //adds element at the start
console.log(arr);
console.log(arr.length); //length of array
console.log(arr.indexOf(3));
console.log(arr.indexOf(10)); //-1 if not found
console.log(arr.includes(4)); //true if found else false
console.log(arr.includes(10)); //false if not found
//arr.splice(2,3); //removes 3 element at index 2
//console.log(arr);
console.log(arr.slice(1,4));//returns elements from index 1 to 3
*/

const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['carrot', 'broccoli', 'spinach','kale'];
//console.log(fruits.push(vegetables)); //adds vegetables array as a single element
console.log(fruits);
//console.log(fruits.concat(vegetables)); //merges two arrays
console.log(fruits);
const allFood = [...fruits, ...vegetables]; //spread operator to merge arrays
console.log(allFood);
let name ="ayushkumar";
console.log(Array.from(name)); //converts string to array of characters