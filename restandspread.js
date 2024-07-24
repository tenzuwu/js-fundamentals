// let { name, country, ...rest } = {
//   ///rest operatir always placed at last
//   name: "ram",
//   age: 50,
//   location: "ktm",
//   country: "nepal",
// };
// console.log(rest);

// let sum = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// };
// sum(1, 2, 3, 4, 5, 6);

let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// SPREAD OPERATOR

let list = [1, 2, 3];
let list1 = ["ram", "harry", "yeshi"];

let output = [10, 11, 2, 4, "n9sol", ...list1, 3, 4, ...list];
console.log(output);

let info = {
  name: " ram",
  location: "ktm",
  age: 50,
};

let info2 = { ...info, country: "nepal", ismarried: true };
console.log(info2);
