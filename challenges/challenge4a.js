// Q.1 filter out numbers from list.

// const filter_array = (arr) =>
//  arr.filter( arrItem => typeof arrItem === 'number');


// console.log(filter_array([1,2,'aasf','1',0,'123',123]));


// // Q.2 Validate ATM pin.
// const pin = 1234;
// const regex = (/[0-9 ]+,[0-9 ]+,[0-9 ]+,[0-9]+/);
// const matched = pin.test(regex);
// console.log(matched);


// Q.3 Array diff.

 const listA = [];
 const listB = [1,2];
 let newArr = [];

 const arrDiff = (a,b) => {
  // array b agar aItem of include nahi krta toh usko resArr me store kro.
   const resArr = a.filter(aItem => !b.includes(aItem));
   return resArr;
  
 }

//  console.log(arrDiff(listA,listB));


//Q.4 Format string of names like 'brat,lisa & Maggie'

let namelist = [
  {name: 'Brat'},
  {name: 'Lisa'},
  {name: 'Maggie'},
  {name: 'Homer'},
  {name: 'Marge'}
];

// should return 'Brat,Lisa & Maggie'.

function list(names){
  let start, end, fname;

  // to convert array of object to arrays.
  start = names.map(({name}) => name);
  let len = start.length;

  if(len === 0)
    return '';
  else if(len === 1)
    return start.join();
  else{
    end = start.pop();
    fname = start.join(", ") + ' & ' + end ;
    return fname;
  }
}
console.log(list(namelist));


//Q.6 A 10 min walk.

function validWalk(walk)
{
  let ncount = 0;
  let scount = 0;
  let wcount = 0;
  let ecount = 0;
  walk.forEach(dir => {
    switch(dir)
    {
      case 'n':
       ncount++;
        break;

      case 's':
        scount++;
        break;

      case 'w':
        wcount++;
        break;

      case 'e':
        ecount++;
        break;
    } 
  });

  if(ncount === scount && wcount === ecount && walk.length === 10)
   return true;
   else
   return false; 
}

 console.log(validWalk(['n','n','n','s','n','s','n','s','n','s']));


//Q.7  Persistant Bugger
// function takes in a number and the result is then splitted and both the digits are again multiplied and the process goes on untill the digit is single. eg- 39 --> 3*9 =27, 2*7 = 14, 1*4 = 4. return 4;


function persistance(num){
 let numArr = Array.from(String(num),Number);

 while(numArr.length > 1)
 {
  const nextNum = numArr.reduce((prev, cur) => prev * cur, 1);
  return 1 + persistance(nextNum);
 }
  return 0;
 }

console.log(persistance(999));


// Q.8 Alternate capitalization.
// eg. i/p : 'abcdef' o/p : ['AbCdEf','aBcDeF'];
// algorithm: we first need to know the index. 2nd we need to change the content of string for which we need to convert it to array('map method()'), 3rd two o/p should be there in array format.


























