
var x = 100;
var x = 200; // This will not cause an error because 'var' allows redeclaration
console.log(x); // Output: 200

let y = 100;
// let y = 200; // This will cause an error: SyntaxError: Identifier 'y' has already been declared
y = 200;
console.log(y); // Output: 200

const z = 100;
// const z = 200; // This will cause an error: SyntaxError: Identifier 'z' has already been declared
// z = 200; // This will cause an error: TypeError: Assignment to constant variable.
console.log(z); // Output: 100


let arr=["vimal","vijay","akash"];
console.log(arr[1]);
console.log(arr);
console.log(arr.length);

arr.unshift("rahul");

console.log(arr);
arr.splice(0,1);
console.log(arr);

let arr1= [10, 20, 30, 40, 50];
arr1.splice(1, 2);
console.log(arr1);
arr1.splice(2, 2, 99,100);
console.log(arr1);
let arr2 = ["a", "b", "c"];
arr2.splice(1, 1, "z");
console.log(arr2);
