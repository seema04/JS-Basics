// food = +prompt("price of food : ");
// tipPercentage =  +(prompt("tip %?")) / 100;
// tipAmount = food * tipPercentage;
// console.log('Tip Amount:',tipAmount);
// total = food + tipAmount;
// console.log('Total:',total);


// floor,ceil,random :some mathematical functions.
// floor - rounds down, ceil-rounds up, random - print random number everytime it is executed.

// let sa we want to get random number between 0 to 2 each time,we can use Math.random function.

// console.log("random number :",(Math.floor(Math.random()*3)));


// // functions
// function myName(name){
//   console.log(name);
// }
// myName('seema'); 



// //dynamic function
// function sayMyName(name){
//   console.log(name);
// }
// sayMyName(prompt('enter your name'));

// string template
// function Name(n){
//  let string1 = `hi ${n} ,how you doing ?`;
//  console.log(string1);
// }

// Name(prompt('enter your name:'));


//functions
// function sum(a,b){
//   return a+b;
// }

// // arrow function
// const sumArrow = (a,b) => a+b;

// function foodTotal(food,tip){
//   tipPercent = tip /100;
//   tipAmount = food * tipPercent;
//   // total = sum(food,tipAmount);
//   total = sumArrow(food,tip);
//   return total;
// }
// console.log(foodTotal(300,20));


//practice questions.

const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const mul = (a,b) => a*b;
 
function div(a,b){
  if(b!=0)
  return a/b;
  else
  return "undefined";
}


function output(){
  console.log('sum:',add(10,20));
  console.log('sub:',sub(30,40));
  console.log('mul:',mul(10,10));
  console.log('div:',div(10,0));
  console.log('div:',div(40,20));
}
output();

