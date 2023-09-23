// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector('#validation-input');
console.log(inputEl)

// inputEl.addEventListener('blur', () => {
//     const ad = (inputEl.value.length === Number(inputEl.dataset.length)) ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
//     return ad})

inputEl.addEventListener('blur', handlerCount);

function handlerCount(event) {
    // console.log(typeof inputEl.value.length)
    console.log(inputEl.value.length === Number(inputEl.dataset.length))
    // console.log(typeof Number(inputEl.dataset.length))
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
//  event.currentTarget.reset();
}
