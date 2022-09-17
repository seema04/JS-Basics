// map - loops and returns an array.
// filter
// reduce.

// (1.) ***********Map method() *************

// [1,2].map(num =>{
//   console.log(num*2);
//   console.log('hey');
//  });

// let result = [12,3,24].map(num => { return num*2 });
// console.log(result);

// writing double function using map method.

// const doubleUsingMap = (arr) =>
// {
//   return arr.map(arrItems => { return arrItems ** 2});
// } 
// console.log(doubleUsingMap([9,8,6]));




//(2.) **********Filter Methods()************

// FILTER([1,2,3,4,5,6],3) => returns [4,5,6]
// lets say we want numbers only greater than 3.
// creating our own filter function.
// const filterNumbers = (number,greaterThan) =>
// {
//   let res = [];
//   for(num of number)
//   {
//     if(num > greaterThan)
//     res.push(num);
//   }
//   return res;
// }
// console.log(filterNumbers([1,2,3,4,5,6],3));

// using built in filter method.
// we are saying for each num return to me num which is greater than 20
// console.log([12,3,55,32,7,5].filter(num => num > 20));
// let say we have actors and we want to filter actors based on their net worth.

const actors = [
  {name: 'johnny', networth: 2000000},
  {name: 'amber', networth: 10},
  {name: 'matt', networth: 170000000},
  {name: 'leonardo', networth: 10000000}
]
 let resultActor = (actors.filter(actor => actor.networth > 5000 ));

let names = resultActor.map(actor => actor.name).join(", ");
console.log(names);




// (3.) ********** Reduce Method() ***********

// reduce method().
// if we want to sum up all the networth.
// SUM : think of reduce.
// REDUCE takes in a function as an argument, and loops through elements and returns back the accumulator.
// summing an array
const sumArrayWithReduce = () => {

}

// console.log([1,2,3,4,5,6,7,8,9,10].reduce((arritem1,arritem2) => 
// { return (arritem1 + arritem2)}));

// let number1 = [1,2,3,4,5,6,7,8,9,10];
// const result1 = number1.reduce((prev,cur) => prev + cur)

// console.log(result1);




// sum of an array using reduce method.
const sumUsingReduce = (arr) =>
{
 return arr.reduce((prev,cur) => prev + cur);
} 

console.log(sumUsingReduce([1,2,3,4,5,6,7,8,9,10]));


// multiply function using reduce function.

function mul(a,b){
  return a*b;
}

const mulUsingReduce = (arr) => {
  // return arr.reduce((prev,cur) => prev*cur);
  return arr.reduce(mul);
}
console.log(mulUsingReduce([1,2,3,4,5]));
