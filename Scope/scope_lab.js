// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}


// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


//Block Scope
// console.log(blockVar);
// console.log(blockLet);


function show(){
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    var functionVar = "I'm a block-scoped var";
}
// show();

// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError
// console.log(functionVar); // Throws ReferenceError


{
    // Variables declared inside the block
    let myLet = 10;
    const myConst = 20;
    var myVar = 30;

    console.log("Inside block:");
    console.log(myLet);   // 10
    console.log(myConst); // 20
    console.log(myVar);   // 30

    // Reassigning variables inside the block
    myLet = 15;      // Allowed
    // myConst = 25; // Error: Assignment to constant variable
    myVar = 35;      // Allowed

    console.log("After reassignment inside block:");
    console.log(myLet);   // 15
    console.log(myConst); // 20
    console.log(myVar);   // 35
}

// Trying to access variables outside the block
console.log("Outside block:");

// console.log(myLet);   
// Error: myLet is not defined

// console.log(myConst); 
// Error: myConst is not defined

console.log(myVar); 
// 35 -> var is function-scoped, not block-scoped

// Reassigning outside the block
myVar = 50;
console.log(myVar); // 50