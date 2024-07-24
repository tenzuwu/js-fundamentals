// OBJ

// array os a collection of values whereas obj
// is a collection of key value pairs  key valur
// pairs are called properties

// let list = {
//   name: "harry",
//   age: 20,
//   location: "ktm",
// };
// //get value
// console.log(list.name);
// console.log(list.name);

// //change value
// list.name = "ram";
// console.log(list);

// //delete
// delete list.loction;
// console.log(list);

// let info = {
//   name: "ram",
//   location: {
//     city: "ktm",
//     prov: "bagmati",
//     country: "nepal",
//   },
//   favfruits: ["apple", "orange", "banana"],

//   age: () => {
//     console.log("i am fun");
//   },
// };
// }
// info.age();
// console.log(info);
// console.log(info.name);
// console.log(info.favfruits[2])
// console.log(info.location.country);

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

// let list = ["ram", "tenzin", "tsering", "yeshi"];
// let i = list.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(i);

// Convert obj into array

// let info = {
//   name: "ram",
//   age: 50,
//   location: "ktm",
// };

// let output = Object.keys(info);
// let output = Object.values(info);
// let output = Object.entries(info);

// console.log(output);

// //convert array into object

// // // array of arrays
// let info = [
//          [ "name", "ram"],
//           ["age", 50],
//           ["location', "ktm"],
// ];
// let output = Object.fromEntries(info);
// console.log(output);

// console.log(Math.random()); //gives data from 0 to 1
// console.log(Math.random() * 100); //[0,1]* 100 => [0, 100]

// console.log(Math.ceil(10.3));
// console.log(Math.floor(10.3));
