// creating constructor function

function Person(){
  this.fname = "Jane",
  this.lname = 'Smith',
  this.age = 34,
  
  this.greet = function(){
    console.log(`Hey, I'm ${this.fname} ${this.lname} and I'm ${this.age} years old.`);
  }
}

const p = new Person;
p.greet();

// If we want the same function to work for different person we have to send different parameters to the constructor function.


function Student(s_name, s_age, s_job){
 this.name = s_name;
 this.age = s_age;
 this.job = s_job;

 this.greet = function(){
  console.log(`Hey my name is ${this.name}, I'm ${this.age} years old and currently working as a ${this.job}`);
 }

}

const s1 = new Student('Ren',43,'developer');
const s2 = new Student('Sia',27,'ui designer');

console.log(s1);
s1.greet();
s2.greet();


// we can add property to object(both or either of them).

// adding property to s1
s1.gender = 'female';
console.log(s1);

// adding a new method to s2 object.
s2.occupation = function(){
  console.log(`My job is to design stuff!`);
}

s2.occupation();

// we can add prototype to constructor function.
Student.prototype.gender = 'Male';

console.log(s2.gender);
console.log(s1.gender);