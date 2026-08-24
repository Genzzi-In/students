// Array  

// storing a multiple values in single variable

// js -  store any datatypes 


// [] -> symbol to create an array and comma separated 

//  starting from 0th index 


const arr = [1,2,3,4,5] // index 0,1,2,3,4 , length - 5 


// const val = [10,12,14,16,18,10,12]

// console.log(val);

// console.log(val[2]);

const fruits  = ["apple","orange","banana","grapes",1,2,3,true, null , undefined]

console.log(fruits);

const multi = [  [11,12,13], [14,15,16] , [17,18 , [ 19, 20 ] ] ]

console.log(multi[1][2]);

console.log(multi[2][2][1]);


// methods 
//  push -> add element to last 

const num = [1,2,3,4,5]

num.push(6);
num.push(7);
console.log(num);

//  push -> remove element from last 

num.pop()
console.log(num);

//  unshift -> add element to front
num.unshift(10)
num.unshift(20)
num.unshift(30)
num.unshift(40)
num.unshift(50)
num.unshift(20)
console.log(num);


//  shift -> remove element to front\

num.shift()
console.log(num);


// slice  -> copy -> original array not modified
// splice -> cut  -> original array will modified

// slice

const res = num.slice(7,9)
console.log(res, num);


// splice

const result = num.splice(7,2)
console.log(result,num);


// array function methods

let counter = 0;

function say(){
    counter++;
    console.log(counter);   
}
// say()

// num.forEach(say)

function dummy(value,index,array){
    console.log(value,index,array);
}

// num.forEach(dummy)

num.forEach(
    (val,id,arr)=>{
    console.log(val,id,arr);
    }
)

// const numVal = num.forEach((val,id)=>{
//     console.log(val * val);
    
// })

// console.log(numVal);


const numVal = num.map(val => val*val)

console.log(numVal);


const val = [10,11,12,13,14,15,16,17,18,19,20]

const evenArr = [];
const oddArr = [];

// for(let i =0 ; i < val.length ; i++){
//     console.log(val[i]);
    
// }

val.forEach(v=>{
    // console.log(v);
    if(v %2 ==0 ) {
        evenArr.push(v)
    }else{
        oddArr.push(v)
    }
    
})
console.log(evenArr);
console.log(oddArr);

// const evenArray = val.map((v)=>v%2==0 ? v : '')
// console.log(evenArray);


const evenArray = val.filter((v)=>v%2==0)
console.log("filter method", evenArray);

const oddArray = val.filter((v)=>v%2==1)
console.log("filter method", oddArray);

numVal.sort((a, b) => b-a)
numVal.sort((a, b) => a-b)
console.log(numVal);


const ans = numVal.reduce((prev,curr,idx,arr)=>prev+curr,100)

console.log(ans);


// https://chatgpt.com/share/6a8c57a6-ac3c-83e8-959d-e95f9bde6130