// 1.PositiveSum problem.

// let sum=0;
// function positiveSum(arr){
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]>0)
//   sum += arr[i];
//   else(arr[i]<0)
//   sum += 0;
// }
// return sum;
// }

// console.log(positiveSum([1,-4,7,12]));



// //2. Vowel Count problem.

// function getCount (str) {
//   let varCount = 0;
//   // converting string into array of characters.

//   const arr = str.split("");
//   console.log(arr);
//   for(val of arr)
//   {
//     switch (val) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         varCount++;
//         break;
    
//       default:
//         varCount += 0;
//         break;
//     }
//   }

//   return varCount;
// }

// console.log(getCount('abracadabra'));


// //3.

// function greet(name){
//   if(name==='johnny')
//   return "hello,my love!";

//   return "hello, " + name + "!";
  
// }
// console.log(greet('johnny'));

// // using terniary operator.
// // function greet1(name){
// //   return 'Hello, ' + (name== 'Johnny'? 'my love!' : name)+ '!';
// // }
// // console.log(greet1('Johnny'));


// // 4.
// function isDivisible(n, x, y) {
//   if(n>0 && x>0 && y>0)
//   return (n % x === 0 && n % y === 0)?true:false;
// }

// console.log(isDivisible(3,1,-3));


// // 5.Make Negative number.
// function makeNegative(num){
//   return (num < 0 ? num : num * (-1));
// }
// console.log(makeNegative (-3));

// // 6. SmallestInteger.
// function findSmallestInt(arrayOfNumbers) {
//   let small = arrayOfNumbers[0];
//   for(let i = 1; i < arrayOfNumbers.length; i++)
//     {
//       if(small > arrayOfNumbers[i])
//         small = arrayOfNumbers[i];
//     }
//   return small;
// }

// function findSmallestInt1(arr){
//   let val = (Math.min([1,56,232,12,8]));
//   return val;
// }

// console.log(findSmallestInt([1,56,232,12,8]));


// // 7.Grasshopper summation.
// function sumNumbers (num) {
//    let sum1=0;
//   for(let i=1; i<=num; i++)
//   sum1 += i;

//   return sum1;
// }

// console.log(sumNumbers(8));


// //8. Mean of array.
// function getAverage(marks)
// {
//   let totalMarks = 0;
//   let avgMarks;
//   let noOfSubjects = marks.length;
//   console.log('no_of_subjects: ',noOfSubjects);

//   for(let i=0; i<marks.length; i++){
//     totalMarks += marks[i];
//   }
//     console.log('totalmarks: ',totalMarks);

//     avgMarks = Math.floor(totalMarks/noOfSubjects);
  
//     return (avgMarks);
// }
// console.log(getAverage([1,1,1,1,1,1,1,2]));


// // 9.remove first and last character.
// function removeCharacter(str){
//   let res = str.slice(1,str.length-1);
//   return res;
// }
// console.log(removeCharacter('person'));


// // 10. String Reversed.
// function solution(str){
//   let strArray = str.split('');
//   console.log(strArray);
//   let len = strArray.length;
//   let resArray = []; 
 
//   let j=len-1;
//   for(let i=0; i<len; i++){
//    resArray[i] = strArray[j];
//    j--;
//  }
//  return (resArray.join(''));
// }

// console.log(solution('world'));


// // 11. convert a string to an array.

// function convertString (string2) {
//   return string2.split(" ");
// }

// console.log(convertString('the hello'));

// // 11. Hero alive ?
// function hero(bullets, dragons){
//   //Get Coding!
//     if(bullets >= 2*dragons)
//       return true;
//     else 
//       return false;
//   }
//   console.log(hero(0,1));

//   // 12. Adding to arrays.

//   function arraySum(arr1,arr2)
//   {
//     let sum=0;
//     let sumArray = [];
//     for(let i=0,j=0; i<arr1.length,j<arr2.length; i++,j++)
//     {
//       sumArray[i] = arr1[i]+arr2[j];
//       sum += sumArray[i];
//     }
//     return sum;
//   }

//   console.log(arraySum([100,200,300],[400,500,600]));


//   // 13. positivesum

//   function positiveSum(arr) {
//     let sum2=0;
//   for(let i = 0; i < arr.length; i++)
//     {
//       if(arr[i]>0)
//         sum2 += arr[i];
//      else(arr[i]<0)
//       sum2 += 0;
//     }
//   return sum2;
// }

// console.log(positiveSum([-1,2,3,4,-5]))


// // 14. repeatString

// function repeatString (n,s)
// {
//   let repeatedstring = "";
//   while(n > 0)
//   {
//     repeatedstring += s;
//     n--;
//   }
//   return repeatedstring;
// }
// console.log(repeatString(4,'abcd'));

// // using repeat function.
// let str5='#';
// console.log(str5.repeat(5));

// 14. Basic mathematical operations.

function basicMaths(operations,value1,value2){
  return eval(value1+operations+value2);
}
console.log(basicMaths('%', 4, 7));



// 14. noSpace.

// function noSpace(x){

//   return x.replace(/\s/g, '');

// }

// function noSpace(x){
//   const arr = x.split(' ');
//   console.log(arr);

//   let newArray = [];
//   for(let i = 0; i < arr.length; i++)
//   {
//    const trimmedString = arr[i].trim();
//     newArray.push(trimmedString);
//   }
//   return(newArray.join(''));
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  let s =jl  B'));


// 15. Double Array elements.

const numArr = [1,2,3];
const doubledArr = numArr.map(doublemap)
console.log(doubledArr);

function doublemap(num)
{
  return num*2;
}

// 16.Century of the year.

function century(year){
  if(year % 100 !== 0)
  return (Math.ceil(year/100));
  else 
  return (year/100);
}
console.log(century(89));


// 17. Cat and Dog year.

function humanCatDogYear(humanYear)
{
  switch(humanYear){
    case 1: 
            return [humanYear,15,15];
            break;
    
   case 2: 
           return [humanYear,24,24];
           break;

   default:
           return [humanYear,(humanYear-2)*4+24,(humanYear-2)*5+24];          
  }
}

console.log(humanCatDogYear(10));


// Count total game points.

// function point(games){
//   let parts;
//   let totalPoints = 0;

//   for(let i = 0; i < games.length; i++)
//   {
//     parts = (games[i].split(':'));
//     if((parts[0] && (parts[1]) >= 0) && (parts[0] && parts[1]) <= 4 )
//     {
//       if(parts[0] > parts[1])
//       totalPoints += 3;
  
//       else if(parts[0] < parts [1])
//       totalPoints += 0;
  
//       else if(parts[0] === parts[1])
//       totalPoints += 1; 
//     }
//   }
//   return(totalPoints);
// }

// console.log(point(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))

function points(games) {
  let total = 0;
  // map() method yaha jo input (alag alag points)hai usko ek array me convert kr rha jo game variable me store ho rha, for example point (1:1) = [1,':',1]'.
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } 
    else if (game[0] > game[2]) {
     total += 3;
    }
  });
  return total;
}
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
