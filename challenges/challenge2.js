const exp1 = 100 % 50;
console.log(exp1);
const exp2 = 100 / 50;
console.log(exp2);

const exp3 = exp1 < exp2;
console.log(exp3);

const exp4 = exp3 && 300 + 5 === 305;
console.log(exp4);
const exp5 = !exp4;
console.log(exp5);

// Q4.
const myObj = {
  prop1:'firstValue',
  prop2: 20
};

const myArray = [40,50,2];
const result1 = myObj.prop2 === (myArray[0] / myArray[2]);
console.log(result1);

// Q5.
const myObj1 = {
  nestedObject1:{
    price:200,
    quantity:5
  },
  nestedObject2:{
     price:1000,
     quantity:2
  }
};

const myArray1 = [myObj1.nestedObject1, myObj1.nestedObject2];

console.log(myArray1);
const res1 = (myArray1[0].price * myArray1[1].price)>(myArray1[0].quantity * myArray1[1].quantity);
console.log(res1);