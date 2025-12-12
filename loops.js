for(let i=0;i<5;i++){
    console.log(i);
}
const arr = [1,2,3,4,5,6,7,8,9,11];
for(i=0;i<arr.length;i++){
    if(arr[i]%3===0){
        console.log("Found a multiple of 3:", arr[i]);
    }
}
const words = ["apple", "banana", "cherry"];
for(let j=0;j<words.length;j++){
    console.log(words[j].toUpperCase());
}
const nestedArr = [[1,2,3],[4,5,6],[7,8,9]];
for(let m=0;m<nestedArr.length;m++){
    for(let n=0;n<nestedArr[m].length;n++){
        console.log(nestedArr[m][n]);
    }
}   
for(let i=0;i<10;i++){
    if(i==4)continue;
    if(i==8)break;
    console.log(i);
}
let k=5;
while(k>2){
    console.log("i is greater than 2:", k);
    k--;
}
//let score =1
let score = 11;
do{
    console.log("Score is:", score);
    score++;
}while(score<=3);


const array = [10,20,30,40,50];
for(const val of array){
    console.log(val);
}
const string = "Hello";
for(let char of string){
    console.log(char);
}

//similar to java hashmap 
const map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3); 
console.log(map);
for(const [key,value] of map){
   console.log(key,value);
   console.log(key);
   console.log(value);
}
