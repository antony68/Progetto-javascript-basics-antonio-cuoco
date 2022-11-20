document.write( `<div class="general-container" id="general-container">
 <div class="container">
  <h1 class="title-container"> Progetto Counter </h1>
  <div class="value" id="value">0</div>
  <div class="container-btn">
     <button class="btnUp" id="btn-go-up" type="submit" value = "1">+</button>
     <button class="btnGoDown" id="btn-go-down" value = "-1">-</button>
     <button class="reset" value="0">reset</button>
  </div>
  <div class="container-btn">
    <button class="btnGoUp2" id="btn-go-up2" type="submit" value = "2">+2</button>
    <button class="btnGoUp5" id="btn-go-up5" value = "5">+5</button>
    <button class="btnGoDown2" value = "-2">-2</button>
    <button class="btnGoDown5" value = "-5">-5</button>
  </div>
  <p class="color">colore attuale: <span class="actual-color"></span> <br> </br> PS. il tasto reset attiva una funzione che cambia colore</p>
  
 </div> 
 </div>`);


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








  
  
