// GETTING VALUE

let obj = {
  name: "tenzin",
  age: 15,
  favfood: "pizza",
};
// console.log(anobj);
// console.log();

//CHANGING VALUE
// obj.name = "tenzin";
// console.log(obj.name);

let product = [
  { name: "mobile", price: 15000 },
  { name: "battery", price: 5000 },
  { name: "radio", price: 3000 },
];

let output = product
  .map((value, index) => {
    return value.price;
  })
  .reduce((pre, cur) => {}, 0);
console.log(output);
