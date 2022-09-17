/* 1. === data should be equal in both numeric value as well as it's type.
eg. 20 === 20 is 'true',since both of them are of number type.
while 20==='20', would be 'false' as both have different datatype.

2. == doesn't checks type of data, value must be same.
*/

// const obj1 = {prop1:'some value',prop2:20};
// const myArray = [1,2,3,4,5];
// const myArr = [1,2,3,4,5];
// console.log(myArray === myArr);
// console.log(obj1===obj1);


const isUserloggedIn = true;
const doesUserHavePermission = false;
const canUserPerformAction = isUserloggedIn && doesUserHavePermission;
console.log(isUserloggedIn);

const result = !(((40/20) === 2 && true) || ('yes' === 'no'));
console.log(result);
const step1 = 40/20;
const step2 = step1 === 2;
const step3 = step2 && true;
const step4 = 'yes'==='no';
const step5 = step4 || step3;
const step6 = !(step5); 
console.log('final expression ans:',step6);

const res = (() => {
  return 20;
})();
console.log(res);