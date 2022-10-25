'use script'

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(textEl);

inputEl.addEventListener('input', ()=>{
    textEl.style.fontSize = inputEl.value + "px"
})




