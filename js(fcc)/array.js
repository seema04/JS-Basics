const firstArray = [10,20,30,40,50];
console.log(firstArray);
// In js we can have different datatype in an array unlike c nd c++.
const secondArray = [10,'seema',{age:25},[1,2]]; 
// console.log(secondArray[3][0]);

// objects.
const objectVariable = {prop1:20,prop2:50};
console.log(objectVariable.prop2);
//accessing object values using bracket notation.
console.log(objectVariable['prop1']);

//nested objects.
const nestedObject = {name:'seema',age:25, addres:{houseno:235,road:'torparoad'},nationality:'Indian'};
console.log(nestedObject);

console.log(nestedObject.addres.houseno);

// functions.
const functionContainerVariable = function(){
  return 20;
}
console.log(functionContainerVariable());
