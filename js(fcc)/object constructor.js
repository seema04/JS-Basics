// let say we want to create 10 objects, we will have to write 10 times each code,instead we can just use constructor.

function Student(first,last,age,std)
{
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.class = std;
}

var student1 = new Student('seema','guria',25,5);
var student2 = new Student('rehan','obroi',22,4);

//1. adding new property to an object.(ye sirf student1 me add hua hai constructor me nahi.)
student1.nationality = 'indian'; 

// 2. we can also add function/method to object.

// student1.name = function() {
//  return this.firstname + " " + this.lastname  
// }


// 3.if we want to add nationality to the constructor,then we have to declare it inside the constructor.
//ham dusri tarike se v add kr skte hai(agar baad me krna hai toh).
Student.prototype.nationality = 'Indian';


// lets add the function fullname through prototype.
Student.prototype.name = function(){
  return this.firstname + ' ' + this.lastname;
}
console.log(student1.name());
console.log(student2.name()); 




// ************* nested object *************

let user = {
  id: 101,

  email: 'sguria@gmail.com',

  personalInfo: {
    name: 'abc',
    address:{
      houseNo : 235,
      street: 'Torpa Road',
      City: 'Khunti',
      pincode: 835210,
      country: 'India'
    }
  }
}

console.log(user.personalInfo.address);

// *************** Hoisting  ******************

// when function call is done before declaring it, unlike other languages, js does throw any error, instead it scan the entire file and then it runs the function call, hence no error.

const hello = () => { console.log('hello')};

hello();

// But in our system it is showing error bcz for hoisting the variables should be initialized with var keyword.

var x = 10;
console.log(x);




