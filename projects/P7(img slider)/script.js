let flag = 0;

const controller = (x) => {
 flag = flag + x;
 slideShow(flag);
}

const slideShow = (num) => {
  let slides = document.querySelectorAll(".slide");
  if(num >= slides.length)
  {
    flag = 0;
    num = 0;
  }
  else if(num < 0)
  {
    flag = slides.length-1;
    num = slides.length-1;
  }

  for(let i of slides)
   i.style.display = 'none';

  slides[num].style.display = 'block';
  // console.log(allSlides); 
}
slideShow(flag);
