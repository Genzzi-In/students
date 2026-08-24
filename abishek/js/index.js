// console.log("Hello world");



// // let , var , const 


// let a =10;

// console.log(a);
// a++;
// console.log(a);

// const b =20;
// console.log(b);
// b++;
// console.log(b);



// let m = 20 ;

// if(true){
//     // console.log(m);
//     let m =12 
//     console.log("m",m);
    
// }
// console.log(m);


// //  let const - if , for , while 
// // var - function


// if(true){
//     var st = 100;
//     console.log(st);
    
// }
// console.log(st);



// // datatypes => number ,String, Boolean, null , undefined 


// let x = 10;
// let y =null;

// console.log(x+y);

// let p =100;
// let q;

// console.log(p+q);


// let s = "Hello"
// let r;
// console.log(s+r);

// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(-1));


// let name = false;
// let username = name ?? "Guest"
// console.log(username);

// let username2 = name || "Guest username"
// console.log(username2);

// let age = 17
// console.log(age >= 18 ? "Eligible" : "not eligible");



// // &&
// // || 
// // ??
// // !!
// // ?:
// // ==
// // ===


// console.log(false  == 0);
// console.log(false  === 0);

// console.log(false  == Boolean(" "));
// console.log(false  === "");




// array & object & function 


// 3 type of function
// 1. function declaration
// 2. function expression
// 3. arrow function
// 4. IIF

// parameter func add(a,b) -> define
// argument add(10,20) ->. invoke

function Add(){
    console.log("Hello");
    
    // return "123"
    return "123"
}

Add()

// let a = 10;
// a
// console.log(a);
// console.log(10);

let a;
a
console.log(a);
console.log(10);

console.log(Add());


function mul(a,b){
    const res = a * b;
    console.log(res);
    return res;
}
const val = mul(10,20)


console.log(val);
console.log(mul(100,200));




// function square(a){
//     return a*a;
// }

// console.log(square(10));


// const square = function(a){
//     return a*a;
// }

//expression
const getPercentage = function(mark,total,unit=100){
    const percentage = (mark/total)*unit;
    return percentage;
}
//  find total and percentage

//declaration
function getSummary(t,e,m,sc,so,func){
    console.log(func);
    
    const total = t+e+m+sc+so;
    getPercentage(total,500,)
    return total;
    // return percentage;
    
}


getSummary(100,100,60,60,60,getPercentage)
// let a = 10; = 20;




function square(a){
    return a*a;
}

console.log(square(10));


const square = function(a){
    return a*a;
}

const square = (a) => {
    return a*a;
}
// only single line logic & value return
const square = (a) => a*a;
const divide = (a,b) => a/b;

// only single line logic & value return  , parameter is single
const square = a => a*a;


const sqrt = val => val**0.5;

console.log(sqrt(64));


// https://chatgpt.com/share/6a85adde-6cf4-83e8-872a-4c68764b7b1b


