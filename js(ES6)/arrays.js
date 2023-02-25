// const arr = ['z','f','a','c'];
// console.log(arr.unshift('g'));
// // console.log(arr.shift());
// console.log(arr.sort());


// multidimension array.
let student = [['Jack',23],['Jane',34],['Tara',20]];
// console.log(student[0][1]);

// adding elements
// student[3] = ['Rachel',56];
// using push method.
student.push(['Rachel',30]);
student[0].push('male');

// adding element at a particular index using splice method.
student.splice(1,0,['Pheobe',22]);
console.log(student);

// student.pop();
// console.log(student);
// student[3].pop();

// console.log(student[1]);
// student.splice(1,1);
// console.log(student);

// iterating over a multidimension array.
// student.forEach((s) => {
//   s.forEach((sData) => {
//     console.log(sData);
//   })
// })

// or we can use for of loop.

// for(let i of student){
//   for(let j of i)
//   console.log(j);
// }

//  we can use for in loop for iterating over the objects. In each iteration a key is assign to the (for-in) variable.

const st = {
  name: 'Monica',
  age: 23,
  job: 'developer'
}

for(let key in st){
  console.log(`${key}: ${st[key]}`);
}

const salaries = {
  Jack: 24000,
  Paul: 34000,
  Monica: 55000

}

for(let i in salaries){
  let salary = "$" + salaries[i];
  console.log(`${i}: ${salary}`);
}
