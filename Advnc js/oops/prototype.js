// ************ JS Prototype ************** 

// function Person3(first,last,age){
//   this.firstName = first;
//   this.lastName = last;
//   this.dob = age;
//  }  
//  // as soon as person3 constructor is created, js creates a prototype named as person3. But this prototype is not yet connected to the object bcz, no object is created. But the inbuilt js prototype gets connected to this person constructor prototype.
 
//  // now when we create objects p1,p2 then the person3 prototype is connected to these objects. These objects have copied the constructor variable and methods inside them.  When we console log the p1 objects we seee that the function/method 'fullName' is copied on both the objects p1,p2 i.e repeating the code, which is not good. Hence we have to remove the duplicacy form the code, but how?
 
//  // We will write the methods inside the person3 prototype(created by js when the constructor is created), bcz these object prototype are never copied to the objects created(p1.p2) they are just attached to the object, hence no duplicacy.
 
 
//  // hence, we will always create methods in the person prototype.

//  Person3.prototype.fullName = function(){
//   console.log(this.firstName + " " + this.lastName);
//  }
 
//  const p1 = new Person3('Zack','Williams',45);
//  const p2 = new Person3('Mark','Zukerberg',38);
//  p1.fullName();
//  console.log(p2);


// ************ prototype with inheritance**************
function Creature(ls){
  this.lifeSpan = ls;
}
// iske baad hi creature type ka prototype ban gya hoga by js. 

Creature.prototype.breathe = function(){
  console.log('breathing..');
}
// creating an object of creature constructor.
let c1 = new Creature(100);
console.log(c1);
c1.breathe();

// now if we want the creature prototype to be used by human constructor or Human object then, we have to "connect the Human prototype to creature prototype".

function Human(f,l,a){
 this.fname = f;
 this.lname = l;
 this.age = a;
}

Human.prototype.Name = function(){
  console.log(this.fname+ " " +this.lname);
}

// "connect the Human prototype to creature prototype".

Human.prototype.__proto__ = Object.create(Creature.prototype);

const m1 = new Human('seema','guria',24);
console.log(m1);
m1.Name();
m1.breathe();


 
 
 
 
 
 
 