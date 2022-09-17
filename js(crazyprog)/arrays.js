// const groceries =['🍌','🍒','🍊','🍇'];
// // // console.log(groceries[3]);
//  groceries.push('🍪');
//  groceries.push('🍓');

// // if we want just banana and cherry.
// console.log(groceries.slice(0,2));
// console.log(groceries.slice(3));
// console.log(groceries);
// console.log(groceries.slice(1,4));


// // indexof, length
// console.log(groceries.indexOf('🍇'));
// console.log('length of array:',groceries.length);

//OBJECTS.
// const person ={
//   //properties of object.
//   name:'Leonardo',
//   shirt:'white',
//   work:'actor'
// };

// console.log(person.name);

// // ways of accessing properties of an object,i.e '.' and '[]' notation.
// console.log(person['shirt']);
// console.log(person['work']);

// // assign objects.

// person.phone=3480234304;
// console.log(person.phone);
// console.log(person);

// const person2={
//   name:'qazi',
//   shirt:'black',
//   work:'developer'
// };

// console.log(person2);


// arrow function with object inside it.
// tempelate literals.
// methods.

const introduce = (name,work) => {
  const person = {
    name:name,
    work:work,
    assets:100000,
    liability:50000,
    //netWorth=assets-liability
    //what if we do the net work calcuations here itself,i.e, netWorth=assets-liability.It is going to throw an error. Instead we can use methods.
    netWorth: function() {
      return this.assets - this.liability;
     }
      //'this' here is referring to the object created just above.
  };

  const intro = `Hi, my name is ${person.name} and I work as a ${person.work} and my net worth is ${person.netWorth()} USD`;
  return intro;

}
console.log(introduce('Qazi','developer'));




