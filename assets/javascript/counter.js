let generalContainer = document.querySelector('.general-container'); 
let divValue = document.querySelector('.value');
let colorSpan = document.querySelector('.actual-color')
let integer = 0;

generalContainer.addEventListener ('click',(event) => {

if (event.target.value === '1' && event.target.tagName === 'BUTTON') {

    divValue.innerText++;

}

else if (event.target.value === '-1' && event.target.tagName === 'BUTTON') {

    divValue.innerText--;

}

else if (event.target.value === '0' && event.target.tagName === 'BUTTON') {

    divValue.textContent = 0;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    divValue.style.color = "#" + randomColor;
    colorSpan.innerHTML = "#" + randomColor;
    colorSpan.style.color = "#" + randomColor; 

}

else if (event.target.value === '2' && event.target.tagName === 'BUTTON') {

   let value2 = Number(divValue.textContent);
   value2 += 2;
   divValue.textContent = value2;

}

else if (event.target.value === '5' && event.target.tagName === 'BUTTON') {

    let value3 = Number(divValue.textContent);
    value3 += 5;
    divValue.textContent = value3;
 
}

else if (event.target.value === '-2' && event.target.tagName === 'BUTTON') {

    let value4 = Number(divValue.textContent);
    value4 -= 2;
    divValue.textContent = value4;
 
}

else if (event.target.value === '-5' && event.target.tagName === 'BUTTON') {

    let value5 = Number(divValue.textContent);
    value5 -= 5;
    divValue.textContent = value5;
 
}





});    





  
  
