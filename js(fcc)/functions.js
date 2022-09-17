if('some string' === 'another string'){
  console.log('the strings are equal');
}
else
console.log('not equal'); 

// switch case.

const colors = ['orange','green','yellow','purple','blue'];

const randomIndex = Math.floor(Math.random() * colors.length);
console.log(randomIndex);

const randomColor = colors[randomIndex];
// using if else.

if(randomColor === 'orange')
console.log('the color is orange');
else if(randomColor === 'green')
console.log('the color is green');
else if(randomColor === 'yellow')
console.log('the color is yellow');
else if(randomColor === 'purple')
console.log('the color is purple');
else if(randomColor === 'blue')
console.log('the color is blue');
else
console.log("none");

// using switch case.
switch (randomIndex) {
  case 0:console.log('color:',colors[randomIndex]);
    break;

  case 1:console.log('color:',colors[randomIndex]);
    break;

  case 2:console.log('color:',colors[randomIndex]);
    break;

  case 3:console.log('color:',colors[randomIndex]);
    break;

  case 4:console.log('color:',colors[randomIndex]);
    break;

  case 5:console.log('color:',colors[randomIndex]);
    break;

  default:
    console.log('no color is found');
    break;
}

// we can also use color as switch case.
// const colors = ['orange','green','yellow','purple','blue'];
// switch (randomColor) {

//   case 'orange':
//     console.log('the color is orange');
//     break;

//   case 'green':
//      console.log('the color is green');
//      break;

//   case 'yellow':
//     console.log('the color is green');
//     break;

//   case 'purple':
//     console.log('the color is purple');
//     break;

//   case 'blue':
//     console.log('the color is blue');
//     break;

//   default:
//     break;
// }