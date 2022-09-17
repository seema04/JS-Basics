
const redButton = document.querySelector('#red');
const yellowButton = document.querySelector('#yellow');
const greenButton = document.querySelector('#green');

// redButton.onclick = () => {
//   console.log("red!");
// }

// yellowButton.onclick = () => {
//   console.log("yellow!");
// }

// greenButton.onclick = () => {
//   console.log("green!");
// }

const colorButton = document.querySelectorAll('.color-button');

// for counting number of times a button have been clicked.
const timesClicked = {'red' : 0, 'yellow' : 0, 'green' : 0};


// using forEach 
colorButton.forEach(color => {
  color.onclick = () =>  {
    // console.log(color.value)
    timesClicked[color.value] += 1;
    color.innerText = timesClicked[color.value];
  }
})

const clearButton = document.querySelector('#clear-button');

 function clearScore(){
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;

  colorButton.forEach(color => color.innerText = ' ');
  clearButton.innerHTML = "cleared";
}
 
clearButton.onclick = () => clearScore();







