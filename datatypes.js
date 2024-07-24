//PRIMITIVE DATATYPE
//primitive = call buy value : like calling them directly thru their assigned value
//string, number , boolean , undiefined

let name = "ram";
console.log(typeof "ram");
console.log(typeof [1]);
//non primitive = call by refernce: like a key or the name of the function
//array, object, function, date
let sum = () => {
  [];
  console.log([1]);
};
console.log({ name: "ram" });
sum();
console.log(typeof sum);
console.log(typeof new Data());

//IN JASVASCRIPT, A PRIMITIVE DATATYPE IS A DATA THAT IS NOT AN OBJECT AND HAS NO METHODS
//OR PROPERTIES

//SET = filters duplicate values and prints in ascending order

let list = [1, 2, 3, 42, 12, 342, 12, 3];
let output = [...new Set(list)];
console.log(output);
