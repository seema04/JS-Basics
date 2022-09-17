let arr = [1,2,3,4,5,6];
console.log(arr.map(arrItems => {return arrItems*2}));


//Q1. count the frequency of letters.
const letterFrequency = (stringPhrase) => 
{
  let freqC = {};
  for(letter of stringPhrase)
  {
    if(letter in freqC)
    freqC[letter] += 1;
    else
    freqC[letter] = 1;
  }
  return freqC;
}
console.log(letterFrequency('jkljdjacjhjjhfjf'));


// Q2. count word frequency.
const wordFrequency = (wordPhrase) => {
  let wordFreq = {};
  let wordArr = wordPhrase.split(' ');
  for(word of wordArr)
  {
    if(word in wordFreq)
    wordFreq[word] += 1;
    else
    wordFreq[word] = 1;
  }
  return wordFreq;
}

console.log(wordFrequency('hi hello bye bye ta ta'));


// Q3. sorting array.
const sortArr = (arr) => {
  for(let i=0; i<arr.length; i++)
{
  {
    for(let j=i+1; j<arr.length; j++)
    {
     if(arr[i]>arr[j])
     {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
     }
    }
  }
 }
 return arr;
}
console.log(sortArr([76,23,8,45,90,104]));


// Q4. calculate seconds

function howManySeconds(hours)
{
  return (hours*60*60);
}
console.log(howManySeconds(1));


// Q5. calculate days in month.
const daysInMonth = (month,year) => {
  switch(month)
  {
    case 1:
    case 3:
    case 5:
    case 6:
    case 7:
    case 8:
    case 10:
    case 12:
         return ('days:',30);
         break;

    case 2:
      if(year % 4 === 0)
      return ('leap year hence,','days:',29);
      else
      return ('days:',28);
      break;

    case 4:
    case 9:
    case 11:
      return ('days:',30);
      break;
    
    default:
      return 0;
  }
}
console.log(daysInMonth(2,2018));

// Q6. findMax 

function findMax (arr1)
{
 let max = arr1[0];
 for(items of arr1)
 {
  if(items > max)
  max = items;
 }
 return max;
}
console.log(findMax([23,78,1,3,90,200,86,34]));

// Q7. string is palindrome or not.
  function isPalindrome (str)
  {
    let j = str.length-1;
   for(let i=0,j; i<(str.length)/2,j<=0; i++,j--)
   {
    if(str[i] !== str[j])
    return('not palindrome string');
   }
   return ('palindrome string');
  }
  console.log(isPalindrome('hello'));


  // using built in methods.
  let s = 'madam';
  console.log(s);
  const sArr = s.split('');
  const sRevArr = sArr.reverse();
  console.log(sRevArr);

  if(sArr === sRevArr)
  console.log('palindrome string');
  else
   console.log('not palindrome string');


  // Q8. saving Strategy.
  function savingsStrategy (income){
    let expenditure = {};
    let needs;
    let wants;
    let savings;

    expenditure.needs = income * (0.5);
    expenditure.wants = income * (0.3);
    expenditure.savings = income * (0.2);
    return expenditure;
  }
  console.log(savingsStrategy(30000));