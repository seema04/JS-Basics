// let person = {}; //creating object.

let person1 ={
  firstName: 'Seema',
  lastName: 'Guria',
  age:28,
 
  fullName: function(){
    console.log(this.firstName + " " + this.lastName);
  }
}
person1.fullName();
// document.write(person1.age);
// console.log(person1.firstName);
// console. log(person1.lastName);
person1.occupation = 'software developer';

// we can also add functions.
person1.sayHi = function fun(){
  console.log('hi!');
}
console.log(person1);
person1.sayHi();


// creating new oject.
let person2 = new Object();
console.log(person2);
