let textArea = document.querySelector('#textbox');

let charCount = document.querySelector('#char-count');

let wordCount = document.querySelector('#word-count');

let count = 0;
textArea.addEventListener('input', function(){
  var text = this.value;
  charCount.innerHTML = text.length;

  text = text.trim();
  let words = text.split(" ");
  let cleanList = words.filter( (elm) => {
    return elm != ""; ;
  });
  wordCount.innerHTML = cleanList.length;



  
});