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








// const formData = new FormData(event.currentTarget)
// formData.forEach(value)

// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>




// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
//  а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль,+
//  и очисти значения полей формы методом reset.

