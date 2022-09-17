let celsius = document.querySelector('#cel');
let fh = document.querySelector("#fh");

celsius.addEventListener("input", function(){
  let c = this.value;
  c = (c * 1.8) + 32;
  if(!Number.isInteger(c))
  {
    c = c.toFixed(4);
  }
  fh.value = c;
});

fh.addEventListener("input", function(){
  let f = this.value;
  f = (f - 32) * 0.5556;
  if(!Number.isInteger(f))
  {
    f = f.toFixed(4);
  }
  celsius.value = f;
});
