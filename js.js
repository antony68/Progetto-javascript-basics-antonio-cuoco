let add = document.querySelector('.btnUp');
let decrease = document.querySelector('.btnGoDown');
let reset = document.querySelector('.reset');
let int = document.querySelector('.value');
let colorSpan = document.querySelector('.actual-color');
let integer = 0;

add.addEventListener('click', function(){

integer += 1;
int.innerHTML = integer;

})

decrease.addEventListener('click', function() {

integer -= 1;
int.innerHTML = integer;

})

reset.addEventListener('click', function(){

integer = 0;
int.innerHTML = integer;

})




const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    int.style.color = "#" + randomColor;
    colorSpan.innerHTML = "#" + randomColor;
    colorSpan.style.color = "#" + randomColor; 
  }
  
  reset.addEventListener("click",setBg);
  setBg();
  
  
