function Person(){
  this.name = 'Jane';
}

// adding property.
Person.prototype.name = 'Rachel';
Person.prototype.age = 23;

const p1 = new Person();

console.log(p1.name);
console.log(p1.age);

// accessing prototype property through object.
console.log(p1.__proto__);

