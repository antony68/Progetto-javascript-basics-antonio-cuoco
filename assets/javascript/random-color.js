const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  int.style.color = "#" + randomColor;
  colorSpan.innerHTML = "#" + randomColor;
  colorSpan.style.color = "#" + randomColor; 
  }
  
  reset.addEventListener("click",setBg);
  setBg();