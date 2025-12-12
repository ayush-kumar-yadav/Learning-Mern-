function add(a,b){
    return a+b
}
console.log(add(2,"a"))
const nums = [1,2,3,4];

const squares = nums.map(n => n * n);
//It applies a function to every element and returns a new array of the transformed values.
console.log(squares);
const evens = nums.filter(n => n%2 === 0);
//It goes through the array and keeps only the values for which your condition returns true.
console.log(evens);
const sum = nums.reduce((acc, curr) => acc + curr, 0);
//It accumulates values into a single result.
console.log(sum);

const num = [1,2,3,4,5];//chaining map function
let newn = num.map((n) => n*10).map((n) => n+5).filter((n)=> n>30);
console.log(newn);

const vals = [10,20,30,40,50];
let val2 = 2;
let result = vals.reduce((acc,curr,val2) =>acc+(curr*val2),0);
console.log(result);