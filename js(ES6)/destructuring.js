// 1. =================== destructuring objects =====================
const person = {
  name: 'sara',
  age: 23,
  gender: 'female'
}

// let {name,age,gender} = person;
// console.log(`name: ${name}, age: ${age}, gender: ${gender}`);


// if we want to use different variable for the keys, we have to declare it first.

let{name:name1, age:age1, gender:gender1} = person;
// console.log(name1);
// console.log(age1);
// console.log(gender1);



// ==================== arrays destructuring ======================
const arr = ['a','jane','rachel',34];
const[p,q,r,s] = arr;
// console.log(`p:${p}, q:${q}, r:${r}, s:${s}`);


// assigning remaining element to a single variable.

const arrVal = ['one','two','three','four'];
const [x,...y] = arrVal;
// console.log(x);
// console.log(y);

// in objects

const st = {name: 'Rachel', age: 25, gender:'female'};


let {name: name2 , ...rest} = st;
// console.log(name2);
// console.log(rest);

// nested destructuring.
const arr1 = ['sandwich','pizza',['donnuts','brownie']];

const [a, b, ...[c]] = arr1;
// console.log(a);
// console.log(b);
// console.log(c);

// nested object destructuring.

const student = {
  name: ';Pheobe',
  age: 23,
  hobbies: {
    read: 'reading novel',
    play: 'playing guitar',
    sing: 'signing'
  }
}

const {name: name3, age, hobbies:{read,play,sing}} = student;
console.log(read);
console.log(play);




