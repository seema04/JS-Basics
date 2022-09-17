 const blogPost = [
  {
   title:'What is javascript',
   author:'Zach Gollwitzer',
   publishDate:'Dec 20, 2020',
   content:'some post content here'
  },
  { 
  title:'How do Arrays work?',
  author:'Zach Gollwitzer',
  publishDate:'Jan 2, 2021',
  content:'some post content here'
  },
  { 
  title:'How long does it take to learn coding?',
  author:'Zach Gollwitzer',
  publishDate:'Dec 20, 2020',
  content:'some post content here'
}
];

// for(const objects of blogPost)
// {
//   console.log(objects);
// }

// for(let obj=0; obj<blogPost.length;obj++)
// {
//   console.log(blogPost[obj]);
// }

// example 2.

// const arr = ['nmsdnks','jkdhfs','poiyttpto','nmzxdoinc',40,50,60,'kdjfoile','iofmxmzhdj'];
// for(let item=0; item<arr.length; item++){
//   if(typeof(arr[item]==='string'))
//   {
//     console.log('item at index ',item,'is',typeof(arr[item]));
//   }
//   else if(typeof(arr[item]==='number'))
//   console.log('item at index ',item,'is',typeof(arr[item]));
// }

// functions.

// function myFun() {
//   console.log('hello world this is myfun');
// }myFun();  //calling the function.


// immediately invoked function.

(function myFun1(){
  console.log('immediately invoked function');
})();



// function with parameters.
// function myFunction(num,str){
//  console.log(num);
//  console.log(str);
// }
// myFunction(4,'seema') 



// **********function assign to a variable*********.

// fun1 is a variable and a function is assign to that variable.
const fun1 = function () {
  console.log('function assign to variable');
}


// yet another way of writing funtions.
// ***********arrow function************
const arrowFun = () =>{
  console.log("Arrow function");
}
arrowFun();




// ******** Built in functions ************

const str = 'Zach';
console.log(str.replace('h','k'));  //doesnt change the original value.
console.log(str);

console.log(str.toUpperCase('seema'));

// split() - the paramter given will be the splitting point,and changes the datatype from string to arrays.
let str1 = 'hello world'; 
console.log(str1.split('l'));

let num1 = 8;
console.log(num1.valueOf());
console.log(typeof(num1.toLocaleString()));


let num2 = 0.00347893749;
console.log(num2.toPrecision());
function multiply(a,b){
  a*b;
}
multiply(2,3);