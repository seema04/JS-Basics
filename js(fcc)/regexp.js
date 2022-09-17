// ******** Regular Expression *********

// regular expression is an object which is used to match the pattern eg. email-id/password validation

const emailValidRegex = new RegExp('^.+@.+\..+$');
const userInput = 'invalidemail@g';
const isValid = emailValidRegex.test(userInput);
console.log(isValid);

// more regular expressions example.

//1. matching all upercase , lower case letters and numbers.
// /[A-Z]  /[a-z]/  /[0-9]/.

//2. /^f/ : it means match if the word is starting with the letter f.
//3. /t$/ : match if the word is ending with letter t. 
// 4. /code|steak/ :match if there is word code or' steak.

const str =  'hello world, 2021  @ more of a string';
// write a reg exp to match the string above.

const regex = /^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(str);
console.log(regex);

// JS strings methods.

// replaceALl,toUpperCase,substring,trim,match.

const myString = 'My Dog jumped on the bed. My dog is a bad Dog;'
const newString = myString.replaceAll('Dog','Cat');

console.log(newString); 
// o/p: My Cat jumped on the bed. My dog is a bad Cat;
// here we saw that only the word 'Dog' is replaced with "Cat". lets use reg exp.

const correctString = myString.replaceAll(/[Dd]{1}og/g,"Cat");
console.log(correctString);


// if we want to caplitalise the first letter only.
let str1 = 'some string';
let capitalStr = str1[0].toUpperCase() + str1.substring(1);
console.log(capitalStr);

// trim() :removes whitespaces from both end of string.
let str2 = '    hello world    ';
console.log(str2.trim());

// another example of trim method.
const externalData = [
  {
    title: 'How to code      ',
    author: ' Zach'
  },
  {
    title: ' What is Vim?',
    author: ' Zach'
  },
  {
    title: '  How do loops work in js?     ',
    author: ' Zach'
  }
];

// how do we remove the whitespaces in the above code.
// brutforce solution.
for(let i=0; i<externalData.length; i++)
{
  const currentTitle = externalData[i].title;
  const currentAuthor =  externalData[i].author;

  externalData[i].title= currentTitle.trim(" ");
  externalData[i].author = currentAuthor.trim(" ");

}
console.log(externalData);


