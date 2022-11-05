let add = document.querySelector('.btnUp');
let decrease = document.querySelector('.btnGoDown');
let reset = document.querySelector('.reset');
let int = document.querySelector('.value');
let colorSpan = document.querySelector('.actual-color');
let add2 = document.querySelector('.btnGoUp2');
let add5 = document.querySelector('.btnGoUp5');
let decrease2 = document.querySelector('.btnGoDown2');
let decrease5 = document.querySelector('.btnGoDown5');
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

add2.addEventListener('click', function(){

    integer += 2;
    int.innerHTML = integer;
    
})

add5.addEventListener('click', function(){

    integer += 5;
    int.innerHTML = integer;
    
})

decrease2.addEventListener('click', function(){

    integer -= 2;
    int.innerHTML = integer;
    
})

decrease5.addEventListener('click', function(){

    integer -= 5;
    int.innerHTML = integer;
    
})




  
  
