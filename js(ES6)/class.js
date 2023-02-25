//==================== constructor function==============


function Person(){
  this.name = 'John',
  this.age = 23,

// In constructor function, we create methods as given below,
   this.greet = function(){
    console.log(`hey It's me ${this.name}! (constructor function method)`);
   }
}

const p1 = new Person();
// p1.greet();

//=====================class===================

class Person1 {
  constructor(name){
    this.name = name;
  }

  // methods inside a class,
  greet1(){
    // console.log(`Hey it's me ${this.name} (class method!)`);
  }


  // getter and setter.
  get personName(){
    return this.name;
  }

  set personName(x){
    this.name = x;
  }


}

const p2 = new Person1('Joey');
const p3 = new Person1('Rachel');
// console.log(p2);
// p3.greet1();

p2.personName = 'Sara'; //setter function.
// console.log(p2.name);


// inheritance.
class Student extends Person1 {
   
  constructor(name){
     // to access variable of parent class inside child class, we use super keyword.
     
     console.log('creating student class');

    //  calling the super class constructor and pass in the name parameter.
     super(name);

  }

}
let st = new Student('JAck');
// console.log(st.name);
// st.greet1();



