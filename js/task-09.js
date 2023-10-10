// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())

const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const colorValue = document.querySelector('.color');

changeColor.addEventListener('click', handlerChangeColor)

function handlerChangeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
