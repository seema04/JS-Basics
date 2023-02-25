// const student = {
//   fname: 'Jane',


//   set changeName(newName){
//     this.fname = newName;
//     return this.fname;
//   },

//   get getName(){
//     return this.fname;
//   }
// };

// console.log(student.fname);
// console.log(student.getName);

// student.changeName = 'Joey';
// console.log(student.getName);


// // Object.define property.

// const person = {
//   fname: 'Monica',
// }

// Object.defineProperty(person,"getName",{
//     get: function(){
//      return this.fname;
//     }
//   });

// Object.defineProperty(person,"changeName",{
//   set: function(value){
//     this.fname = value;
//     return this.fname;
//   }
// })

// console.log(person.fname);

// // changing the property value by set function.
// person.changeName = 'Sarah';
// console.log(person.fname);


//=============== prototype in js ==============
function Per(){
  this.name = 'John',
  this.age = 35
}

const p1 = new Per();

//adding property to object through prototype.  
Per.prototype.gender = 'Male';
console.log(Per.prototype);

// adding methods to a constructor function using prototype(ham cahte hai ki ye property saare obejects ke liye ho).

Per.prototype.greet = () => {
  console.log(`Hello this is ${p1.name}`);
}

p1.greet();

// changing prototype 
Per.prototype.size = 'S';
const p2 = new Per();
console.log('size: '+ p2.size);

Per.prototype.size = 'M';
const p3 = new Per();
console.log('size: ' + p3.size);
console.log('size: ' + p2.size);


