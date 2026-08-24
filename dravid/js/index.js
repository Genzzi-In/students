console.log("Hello world");



// var   don't used that  redeclare , reassign
// let - if ,for , while
// const  - if ,for , while ,func

var a = false;
console.log(a);

var a = "hii";

console.log(a);


let m = 10;

// let m = "hello";

console.log(m);


let b = 20;
b++;

console.log(b);


const num = 100;
// num--
console.log(num);


if(true){
    var s = "ram"
    console.log(s);
    
}

console.log(s);


function add(a,b){
    var c = a+b
    return c;
}
// console.log(c);


// primitive data type 
// number , string , boolean , null , undefined


let a1  = null;

let x;  // undefined
let y =200;


let b1 = 100;

console.log(a1+b1);

console.log(x+y); // NaN not an number




// && || ?? ?: == ===
// <,>,<=,>=

const falseThings = [ "", 0 , false ,null , undefined," ", "a",1,-1,true ]

for(let thing of falseThings){
    console.log(`values: ${thing} and its types of ${Boolean(thing)}`);
    
}

let age = 21;
// const val = age && "its eligible";
// console.log(val);

// const val = age || "its eligible";
// console.log(val);


// const val = age ?? "its eligible"
// console.log(val);


console.log( age >= 18 ? "its eligible" : " not eligible" );
// == "only check value" loosely equal
//  === value + datatype strictly equal 

console.log(5 == '5');
console.log(5 === '5');


console.log(0 == "");
console.log(0 === "");



// https://chatgpt.com/share/6a869937-bd40-83e9-8197-8240a330e3f3


// dravid.intern@genzzi.in