//define function

// function sum() {
//   console.log("i am function");
// }
// sum();  //call function

// pass value to function

function sum(a, b) {
  console.log(a + b);
}
sum(2, 6);

//default value

function sum(a, b, c, d = 10) {
  // if no new value has been sent from arg, then default valur will be triggered
  console.log(a + b + c + d);
}
sum(2, 3, 4, 5);
//function with return
let sum = function (a, b) {
  let c = a + b;
  return c;
};
//function without return replaces the value with the call command : function()
//function with return call by storing it in a varaible : let variable = sum()

// let add = sum(2,6);
// console.log(sum)

//arrow function
let sum = (a, b) => {
  let c = a + b;
  return c;
};
let add = sum(2, 6);
console.log(add);

//null means variable is defined but will initialize as null
let a = null;
console.log(a);

//CALL BACK FUNCTION
let fun1 = () => {};
let fun2 = () => {};
//A CALLBACK FUNCTION IS A FUNCTION PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT
//EG: map, filter, reduce

fun1(fun2);
//HERE CALLBACK FUNCTION IS FUN2
//FUN1 FUNC IS HGIHER ORDER FUNCTION

// HIGHER ORDER FUNCTION

// A FUNCTION WHICH TAKES ARGUMENT AS FUNCTION.

// A FUNCTION WHICH RETURNS ANOTHER FUNCTION IS CALLED HGIHER ORDER FUNCTION.
