'use script'

let inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    inputEl = event.currentTarget.value;
    if (spanEl !== '') 
      {spanEl.innerText = inputEl.trim()} 
    " Anonymous";
})



