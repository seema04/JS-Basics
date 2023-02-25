// function Person() {
//   this.name = 'Jane',
//   this.age = 34,
//   this.sayName = function(){
//     console.log(this.name);
//   }

//   function innerfun(){
//    console.log(this.age);
//   }

// }

// const p1 = new Person();
// console.log(p1.name);
// console.log(p1.sayName());
// console.log(p1.innerfun);


// using arrow function.
// function Person(){
//   this.name = 'Jack',
//   this.age = 33,
//   this.greet = function(){
//     console.log(`hey my name is ${this.name}`);
//   }

//   // here it is showing undefined as the inner fun is searching for global age variable, which is not present.
//   // But in the case of arrow function, it is accesible(object property).

//   function innerfun(){
//      console.log('age: ' + this.age);
//       }

//    innerfun();

//   const greet2 = () =>{
//    console.log(`hey my name is ${this.name} and i am ${this.age} years old.`);
//   }
  
//   greet2();
// }

// const p2 = new Person();
// p2.greet();




// ============maps data structure=============.

const map1 = new Map();
console.log(map1);
map1.set('info',{name: 'jane', age: 23});
console.log(map1);

// accessing map elements.
console.log(map1.get('info'));
console.log(map1.has('info'));

// removing elements.
map1.delete('info');
console.log(map1);
map1.clear();
console.log(map1);



//  we can also use function and objects as keys.
let map2 = new Map();
let obj = {};
map2.set((obj,{name: 'jane', job: 'developer',gender: 'female'}),('address', {street: '235A', houseNO: '12'}));
console.log(map2);
// console.log(map2.size);



const map3 = new Map();
map3.set('name', 'jack');
map3.set('age',23);

for(let [key,value] of map3)
{
  console.log(key + ':' + value);
}

// iterate over map keys.
for(let key of map3.keys()){
 console.log(key);
}

// iterate over map value
for(let val of map3.values()){
  console.log(val);
}

// get key /values of map.
let m1 = new Map();
m1.set('name','Jane');
m1.set('age',33);
for(let i of m1.entries()){
  // entries fun takes each key-value pair, consider it as an array.
  console.log(`${i[0]}: ${i[1]}`);
}

