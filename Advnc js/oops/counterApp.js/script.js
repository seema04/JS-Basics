// javascript
let count = 0;
let countEl = document.getElementById('person-count');
let saveEl =  document.getElementById('entries');


function increment() {
    count += 1;
    countEl.textContent = count; 

}

function save(){
  let perEntries = count + ' - ';
  saveEl.textContent += ' '+perEntries;
  countEl.innerText = 0;
  count = 0;
}