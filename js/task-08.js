'use script'


const form = document.querySelector(".login-form");
const formEl= {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены.");
    }
    
        formEl.email = email.value,
        formEl.password = password.value

        console.log(formEl);
    event.currentTarget.reset();
}

