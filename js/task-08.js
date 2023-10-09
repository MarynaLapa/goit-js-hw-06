// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', handlerSumbit);

// Під час відправлення форми сторінка не повинна перезавантажуватися.  !event.preventDefault();

function handlerSumbit(event) {
    event.preventDefault();
    console.dir(event.currentTarget);
    const { email, password } = event.currentTarget;
    console.log(email);
    console.log(password);
    
    }
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



