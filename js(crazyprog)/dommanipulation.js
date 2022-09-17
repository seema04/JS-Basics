console.log('hello');
let titleDiv = document.getElementById('t2');

console.log('before changing js : ', titleDiv.innerText);

let message = 'Goodbye my lover!'

titleDiv.innerText = message;

console.log('after changing the js : ', titleDiv.innerText);

// we can also change the HTML 
// it won't work as it is innerHTML it will work only if title is wrapped under div.
// that is change the innerHTML inside div.

titleDiv.innerHTML = `<p>${message}</p>`
