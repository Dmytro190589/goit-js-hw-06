
'use script'

const buttons = document.querySelector('#counter');
const increment  = buttons.lastElementChild;
const decrement   = buttons.firstElementChild;

const spanEl = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', ()=>{
    counterValue -=1;
    spanEl.textContent = counterValue;
})
increment.addEventListener('click', ()=>{
    counterValue += 1;
    spanEl.textContent = counterValue;
})

