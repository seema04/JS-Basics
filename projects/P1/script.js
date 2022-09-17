// const title = document.querySelector('#heading');
// // console.log(title);

// // **********dom traversal*************
// // 1. parent node
// console.log(title.parentNode);


// // child node.
// const divParent = document.querySelector('.parent');
// console.log(divParent.childNodes);


// // nextELementSibling : tells us the next element siblings.
// // agar ham h1(heading) ko lekr uske siblings get krna caahte hai, toh kya krege.

// console.log(title.nextElementSibling);

// // pervious sibling: (h3 ks previous sibling kya hai.)
// const subString = document.querySelector('h3');
// console.log(subString.previousElementSibling);




// // *********** Manipulation **************
// title.innerText = "Javascript is Easy to Learn!";

// title.style.color = 'skyblue';
// title.style.fontFamily = 'cursive';

// // adding new class to an element.
// title.classList.add('title');
// title.classList.remove('head');



// // ************Advance Manipulation************.
// // if we want to add new elements to html.

// // create element.
// const heading2 = document.createElement('h3');
// // ye code lihkne se v webpage pr hame ni dikhega, hame append krna pdega.
// heading2.innerHTML = 'h3 heading!'; 
// divParent.append(heading2);
// // append function add element at the end, if we want to add element before any element,we have to use 'insertadjacentelement' function.

// const subHeading = document.createElement('h4');
// subHeading.innerHTML = 'h4 heading!';
// heading2.insertAdjacentElement('beforebegin', subHeading);



// // **************Event Listner*****************
// const clickButton = document.querySelector('#btn');

// clickButton.addEventListener('click', function(){
//   title.style.color = 'indianred';
//   title.style.scale = '1.5';
// })


// bulb on off project.
const Bulb = document.querySelector('#bulb');

const Switch = document.querySelector("#bulb-switch");

Switch.addEventListener("click", function(){
  if(Bulb.src.match('off'))
  {
    Bulb.src = "/DOM/P1/bulb-on.gif";
    Switch.innerHTML = "Turn Off";
  }
  else
  {
    Bulb.src = "/DOM/P1/bulb-off.gif";
    Switch.innerHTML = "Turn On";
  }
})


