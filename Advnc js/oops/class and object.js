class Person{
  // constructor function.
 constructor(n,a){
  // console.log('constructor called');
  this.name = n;
  this.age = a;
 }
//  adding method to class.
// here in ES6 the methods are automatically added to prototype,unlike es5 where we have to manually add the function to prototype.

  sayHi(){
    console.log('hi');
  }

  // defining static method.
  static hello(){
    console.log('hello');
  }
};

// jaise hi object banega constructor fun call hoga.
let p1 = new Person("abc",28);
p1.sayHi();
console.log(p1);

// p1.hello(); will throw an error, as static methods are called with 'class name' and not through the object.

Person.hello();

// when object is created, static property(variables) are not copied to the object hence it cant be accessed by the object. Also the methods are always inside prototype by default in classes, hence object doesnt have the static methods too, so it cant be accessed through object name.
