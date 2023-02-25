class Person {
  constructor(name)
  {
    this.name = name;
  }

  greet(){
    console.log(`hello ${this.name}`);
  }

}

// inheritance(child class extends property from parent class)
class Student extends Person{
  constructor(name)
  {
    super(name);
    this.occupation = 'Web developer';
  }

  greet(){
    console.log(`Hello ${this.name}!, occupation: ${this.occupation}`);
  }

}

const s = new Student('Joey');
// s.greet();

// ====================== timer function =======================

// function greetHello(){
//  console.log('Hello World');
// }

// // display text after 3s.
//  const i = setTimeout(greetHello,3000);
// console.log('this message is shown first');
// console.log(i);



// program to show time every 3sec.

// function showTime(){
//   let dateTime = new Date();

//   let time = dateTime.toLocaleTimeString();
//   console.log(time);

//   setTimeout(showTime,3000);
// }

// ===================== promise ======================

const count = true;

let countVal = new Promise(function(resolve,reject){
  if(count)
  resolve('There is a count value');
  else
  reject('there is no count value');
});

// console.log(countVal);

// ==================== then() ======================

let cVal = new Promise(function(resolve,reject){
  resolve('Promise resolved');
  // reject('Promise rejected!');

});

// executes when promise executes, or is fullfilled.
cVal
.then(function successVal(result){
  console.log(result);
})

// .then(function successVal1(){
//   console.log('you can call mulitple functions this way');
// })

// if there is error, then catch block of code is going to be executed.

.catch(function errorValue(result){
  console.log(result);


  // ==================== finally() =======================

  cVal.finally(
    function greet(){
      console.log('the code is executed');
    })
})

// ===================async and await====================

let promise = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('Promise resolved')},4000);
});

// async function
async function asyncFun(){

  // wait untill the promise is resolved.
  let res = await promise;
  //  let res;
  console.log(res);
  console.log('hello');
}

asyncFun();


