console.log("Array");

// multiple elements store in single variable
//  any datatype we can store
//  symbol -> []
//  comma separated 
// index unique and start from 0
// mutable - > add , delete, update


const arr = [10,11,12,13,14,15]

console.log(arr);

console.log(arr[3]);
arr[3] = 20

console.log(arr);


// methods 

// push -> add to last

arr.push(19)
arr.push(25)

console.log(arr);
// pop -> remove  from last

// arr.pop()
// arr.pop()
// arr.pop()

console.log(arr);


// unshift -> add the element to front

arr.unshift(5)
arr.unshift(6)
console.log(arr);

// shift -> remove the element from front

// arr.shift()
// arr.shift()
// arr.shift()

console.log(arr);

// slice -> copy -> original memory wont modified
// splice -> cut -> original memory will modified

const newArr = arr.slice(2,5)
console.log(newArr);
console.log(arr);


const newArr1 = arr.splice(2,3)
console.log(newArr1);
console.log(arr);


console.log(arr.reverse());
console.log(arr.includes(30))
console.log(arr.indexOf(7))

// arr.push("Hii")

// arr func methods 

// foreach

// function base(value,index,array){
//     console.log("callback",value,index);
    
// }
// const base = (value,index,array)=>{
//     console.log("callback",value,index);
    
// }

// arr.forEach(base)

// const newValues= arr.forEach(
//     (value,index,array)=>{
//     console.log("callback",value,index);
//     return value * 2;
//     }
// )

// for(let i =0;i< arr.length;i++){
//     console.log(arr[i],i);
    
// }
console.log(arr);

// const newValues= arr.map(
//     (value,index,array)=>{
//     // console.log("callback",value,index);
//     if (value % 2 ==0){
//         return value +  (value * 18/100);
//     }
//     }
// )

// console.log("new Values",newValues);




// const newValues= arr.filter(
//     (value,index,array)=>{
//     // console.log("callback",value,index);
//     if (value % 2 ==0){
//         return value +  (value * 18/100);
//     }
//     }
// ).map(val=>val + (val * 18/100))

const newValues= arr
            .filter(val=>val%2==0)
            .map(val=>val + (val * 18/100))

console.log("new Values",newValues);

const total = newValues.reduce((prev,curr)=>prev+curr)
console.log("Total",total);


// arr.sort((a,b)=>a-b)
arr.sort((a,b)=>b-a)
console.log(arr);


// https://chatgpt.com/share/6a8c57a6-ac3c-83e8-959d-e95f9bde6130
