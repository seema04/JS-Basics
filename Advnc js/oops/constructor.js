// constructor.(blueprint).
function Person(fname,lname,age){
  this.firstname = fname;
  this.lastname = lname;
  this.age = age;

  this.sayFullName = function (){
   console.log('fullname : ', fname + " " + lname);
  }
}

let P1 = new Person('Bill','Gates',25);
(P1.sayFullName());

let P2 = new Person('Mark','Zuck',28);
console.log(P2);
