// Push = adds an element to the end of an array
// pop = removes the last ele of the array
//unshift = push valur to the first ele of an array
//shift = remvoes the first ele of an arrray

// let list = [1,2,3]
// list.push (5);
// list.pop();
// list.unshift("ram");
// list.shift();

// let list = ['a', 'e', 'z','c']
// let output = list.sort();           //num sort does not work like this
// console.log(output);

// let list = ['a', 'e', 'z','c']
// let output = list.sort((a,b) => {
//     return a-b;
// });
// console.log(output);

// let list = [1,2,3,4]
// let output = list.reduce((previous, current) => {
//     return previous + current;
// }, 0);
// console.log (output);

// find the sum of all even elements of an array
let list = [1, 2, 3, 4];
let output = list
  .filter((value, index) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((pre, cur) => {
    return pre + cur;
  }, 0);
console.log(output);
