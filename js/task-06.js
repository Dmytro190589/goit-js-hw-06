'use script'

const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('change', () => {
    if (inputEl.value.length != lengthEl) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");

    } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");}
}
)







