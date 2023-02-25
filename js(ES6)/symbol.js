// add symbol as an object key.
let id = Symbol("id");

let Person = {
  name: 'jack',

  // adding symbol as a key.
  [id]: 123
}

console.log(Person);

//Symbol methods.
 let sym = Symbol.for('hello');
 let sym2 = Symbol.for('id');

 console.log(Symbol.keyFor(sym));
 console.log(Symbol.keyFor(sym2));


//  try and catch

const numerator = 100, denominator = 'a';
try{
  console.log(numerator/denominator);

  // forgot to define a variable.
  console.log(a);
}
catch{
  console.log('An error caught');
  console.log('Error message: ' + error);
}


// tr catch and throw.
const n = 40;
try{
  if(n>50)
  {
    console.log('Success');
  }
  else{
    // user-defined throw statement
    throw new Error('The number is low');
  }

}
catch(error){
  console.log('An error caught');
  console.log('Error message: ' + error);
}

