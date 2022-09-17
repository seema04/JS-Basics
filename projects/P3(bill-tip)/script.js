// selecting bill input from html.
const billInput = document.querySelector('#billTotalInput');

// tip input.
const tipInput = document.querySelector('#tipInput');

// selecting no of people div
const numberOfPeopleDiv = document.querySelector('#numberOfPeople');

const perPersonTotalDiv = document.querySelector('#perPersonTotal');

let noOfPerson = +(numberOfPeople.innerText);
console.log(noOfPerson);

// calculating total bill.
const calculateBill = () => {
 const bill = Number(billInput.value); 

 const tipPercent = Number(tipInput.value) / 100;
 console.log(tipPercent);

 const tipAmount = bill * tipPercent;

 const total = tipAmount + bill;

 const perPersonTotal = total / noOfPerson;

 perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
}


const increasePeople = () => {
  noOfPerson += 1;
  numberOfPeopleDiv.innerText = noOfPerson;
  calculateBill();
}

const decreasePeople = () => {
  if(noOfPerson <= 1)
  return;

  noOfPerson -= 1;
  numberOfPeopleDiv.innerText = noOfPerson;
  calculateBill();
}
