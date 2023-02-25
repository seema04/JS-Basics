const person = {
  name: 'Joe', 
  age: 27, 
  job: 'developer',
  add: { HouseNo: '235A',
         street: 'Baker Street',
         country: 'LA California'},

  greet: function(){
    console.log(`Hey, I'm ${this.name} and I work as a ${this.job}.`);
  }
}

console.log(person.name);
console.log(person.age);
console.log(person.job);
console.log(person.add);
console.log(person.add.street);
console.log(person.add.country);
person.greet();

// adding property to object.
person.salary = 960000;
console.log(person.salary);

// adding methods to objects.
person.sayHello = function(){
  console.log(`Hello my name is ${person.name}`);
}

person.sayHello();
