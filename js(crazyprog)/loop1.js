const fruits = ['🍔','🍟','🍿','🍕','🍨','🍩','🥝','🍹'];
// for(let i=0;i<fruits.length;i++)
// {
//   console.log(i,fruits[i]);
// }

//for of.
// for(const fruit of fruits){
//   console.log(fruit);
// }

const number = [4,5,6,7,8,9,10];
// using standard for loop.
// for(let i=0;i<number.length;i++)
// {
//   console.log(number[i]);
// }

// // using for of loop.
// for(const num of number){
//   console.log(num*2);
// }

// doubling array elements and storing the elements in a new array.
let res = [];
for(const num of number){
  res.push(num*2);
}
console.log(res);

// using function.

const doubleArr = (number) => {
  let result = [];
   for(const num of number)
   {
    result.push(num*3);
   }
   return result;
}
console.log(doubleArr([2,4,6,8,10]));


const groceries = 
['🍇','🍓','🍒','🍊','🍐','🍏','🍌'];

// for (let i = 0; i < groceries.length; i++) {
//   console.log(i,groceries[i]);
// }
// other way of writing for loop

// for (const grocery of groceries) {
//   // console.log(grocery);
// }

// const number = [1,2,3,4,5,6,7];
// let sum=0;
// // for (const num of number) { 
// //   res.push(num*2);
// //   sum += num;
// // }
// // console.log('sum:',sum);
// // console.log(res);

// // using function.

// const double = (n) => {
//    let result = [];
//   for (const num of n ) {
//    result.push(num*2);
//   }
//   return result;
// }
// console.log(double([1,2,3,4,5,6,7]));


// // square an array element using es6 function.

// const sqr = (n) => {
//  let res = [];
//  for(const i of n){
//    res.push(i*i);
//  }
//  return res;
// }
// console.log(sqr([1,2,3,4,5,6,7,20,30,50,40]));

// examples on arrays.

// const letterCounter = () => {
//  for(const letter in phrase){
//    console.log((+letter) + 1);
//  }
// }

// const phrase = prompt("write your phrase");
// console.log(letterCounter(phrase));
// console.log('length of string : ',phrase.length);

const sumArray = (numbers) => {
  let res=0;
  for(const num of numbers)
  res += num
  return {result:res};
}
console.log(sumArray([1,2,3,4,5,6,7,8,9]));

const mulArray = (a) => {
   let resMul=1;
   for(const num of a)
   {
    resMul *= num;
   }
   return resMul;
}

console.log(mulArray([1,2,3,4,5,6]));
