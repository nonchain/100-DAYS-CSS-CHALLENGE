const number = document.querySelector('.number'),
   plus = document.querySelector('.plus'),
   minus = document.querySelector('.minus');

let counter = 0;

plus.addEventListener('click', ()=>{
   counter++;
   number.innerHTML = counter;
});

minus.addEventListener('click', ()=>{
   counter--;
   number.innerHTML = counter;
});