function myCallback(someNumber){
  return someNumber * 2;
}

function mainFunction(randomNumber,shoudCall,callback)
{
  let res = randomNumber;
  if(shoudCall)
  {
    res = callback(randomNumber);
  }
  return res;
}
// here we are passing a predefined function 'myCallback'.
console.log(mainFunction(20,true,myCallback));

// other methods of calling the same function without having multiple callbacks..
// 1.
console.log(mainFunction(40,true,function (num)
{
  return 2*num;
}))

// 2.
console.log(mainFunction(60,true, (num) => {return num*2}));

// 3.
console.log(mainFunction(70,true,(num) => num*2));

// callback functions : when there is a lot of calling happening inside a function, 'map method' helps in callback function,as we can pass any function as a parameter to map method which act as a callback function.

// Q. let say we want an array of first letter from array of strings.

const arr = ["Hello", "World","my","name","is","seema"];
const newArr = arr.map(arrItems => arrItems[0]);
console.log('new array:',newArr);

