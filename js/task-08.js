// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', handlerSumbit);

function handlerSumbit(event) {

// Під час відправлення форми сторінка не повинна перезавантажуватися.  !event.preventDefault();
    event.preventDefault();

    console.dir(event.currentTarget);
    
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
    const { email, password } = event.currentTarget;
    console.log(email);
    console.log(password);
    
    if (email.value === "" || password.value === "") {
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
        alert('All fields must be filled.')
    } else {
        const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);

    // Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

    event.currentTarget.reset();
    }
}




