console.log("Hello world");

function Total(tamil,english,maths,science,social){
    // let tamil = 100;
    // let english = 100;
    // let maths = 100;
    // let science = 100;
    // let social = 100;
    const total = tamil + english + maths + science + social
    console.log(total);
    return total;
}

function GetPercentage(val,unit=5){
    console.log("Percentage is ",val / unit);
    
    return val / unit
}

GetPercentage(450)

const person1Total = Total(100,80,90,100,80);
console.log(GetPercentage(person1Total,5));

const percentage1 = Total(100,80,80,80,100) /5;
console.log(percentage1);


// 4 types 

    
// function declaration
function add(a,b){
    return a+b
}
    
// function expression
const add = function(a,b){
    return a+b
}
    
// arrow function
const add = (a,b) => {
    return a+b
}

// if single line logic + return
const add = (a,b)=> a+b

// if single parameter
const square = a => a*a;


// IIFE - immediately Invoked function Expression

(
    function (){
        console.log(" Welcome to Javascript 1");
    }
)()



(
    function (){
        console.log(" Welcome to Javascript 2 ");
    }
)()

// https://chatgpt.com/share/6a8d3495-4aa8-83e8-9f58-0e338fac925f