// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const  inputEl = document.querySelector('#font-size-control');
// console.log(inputEl)
const spanEl = document.querySelector('#text');
// console.log(spanEl.textContent)

inputEl.addEventListener('input', handlerChangeTextStyle);

function handlerChangeTextStyle() {
    spanEl.style.fontSize = inputEl.value +'px';
}


