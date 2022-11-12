let generalContainer = document.querySelector('.general-container'); 
let divValue = document.querySelector('#value');
let colorSpan = document.querySelector('.actual-color');
let integer = 0;

generalContainer.addEventListener ('click',(event) => {

if (event.target.tagName === 'BUTTON') {

 switch (event.target.value) {

    case '0':
        divValue.textContent = 0;
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divValue.style.color = "#" + randomColor;
        colorSpan.innerHTML = "#" + randomColor;
        colorSpan.style.color = "#" + randomColor; 
        break;

    case '1':
        divValue.innerText++;
        break;

    case '-1':
         divValue.innerText--;
        break;

    case '2':
        let value2 = Number(divValue.textContent);
        value2 += 2;
        divValue.textContent = value2;
        break;

    case '-2':
        let value4 = Number(divValue.textContent);
        value4 -= 2;
        divValue.textContent = value4;
        break;
    
    case '5':
        let value3 = Number(divValue.textContent);
        value3 += 5;
        divValue.textContent = value3;
        break;

    case '-5':
        let value5 = Number(divValue.textContent);
        value5 -= 5;
        divValue.textContent = value5;
        break;
    

 }    

}

});    






  
  
