// creating empty set.
const s1 = new Set();
console.log(s1);

// set with multiple types of values.
const s2 = new Set([1,'hello',{count: true}]);
console.log(s2);

// accessing set elements.
console.log(s2.values());
console.log(s2.has('hello'));
s2.add(456);
console.log(s2);
// s2.clear();
// console.log(s2);

// iterate over set.

for(let i of s2)
console.log(i);


// weak set vs weak map.
// weak map only accepts objects as keys, while weak set accepts only objects as set element, any other data is consider to be error.

const weakM = new WeakMap();
//  this line will throw error, as the key is used is not an object.
// weakM.set('age',24); 

const obj = {};

weakM.set(obj, {name: 'Jane',
age: 24});
console.log(weakM);

// weakset.
const weakS = new WeakSet();

const std = {
  name: 'Joey',
  age: 23
}

weakS.add(std);
console.log(std);

// Mathematical set operations.
// set union operation.

function union(a,b){
  let unionSet = new Set(a);
  for(let i of b)
   unionSet.add(i);

   return unionSet;
}

let setA = new Set(['apple','mango','orange']);
let setB = new Set([1,2,3,4,'mango']);
let result = union(setA,setB);
console.log(result);


// ============set intersection method===========
function intersection(setA,setB){
  let intersectionSet = new Set();
  for(let i of setB){
    if(setA.has(i))
    {
      intersectionSet.add(i);
    }
  }

  return intersectionSet
}

let res = intersection(setA,setB);
console.log(res);



//================== set difference ================
// elements of setA that are not in setB.
// setA = [apple,mango,orange] setB = [mango,banana,orange,pineapple] , resultant set = [apple]

function setDifference (setA,setB){
  let differenceSet = new Set(setA);
  for(let item of setB)
  {
    // since differenceSet contains elements of setA, so we are simply deleting,the item which are present in b from resulttant set.
    differenceSet.delete(item);
  }

  return differenceSet;
}

const s3 = new Set(['apple','banana','orange','pineapple','blueberry']);
const s4 = new Set(['strawberry','banana','orange']);

console.log(setDifference(s3,s4));


// ===============set subset===================
// returns true if all the elements of set b is in set a.
function subset(setA,setB){
  for(let item of setB)
  {
    if(!setA.has(item))
    return false;
  }
  return true;
}
console.log(s3);
console.log(s4);
console.log(subset(s3,s4));
