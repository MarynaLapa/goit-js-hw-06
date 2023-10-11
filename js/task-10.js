// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

 // Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const input = document.querySelector('input');
// input.addEventListener('input', () => {
//   console.log(input.value);
// })

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);

const buttonDestroy = document.querySelector('[data-destroy]');
// console.log(buttonDestroy);

const buttonCreate = document.querySelector('[data-create]');
    
buttonCreate.addEventListener('click', handlerGreateBoxes);

buttonDestroy.addEventListener('click', destroyBoxes)


    function handlerGreateBoxes() {
      createBoxes(input.value)
    }

    function createBoxes(amount) {

      const defaultSize = 30;
      const increaseValue = 10;

      for (let i = 0; i < amount; i += 1) {
        let divBox = document.createElement('div');
        divBox.style.width = (defaultSize + i * increaseValue) + 'px';
        divBox.style.height = (defaultSize + i * increaseValue) + 'px';
        divBox.style.backgroundColor = getRandomHexColor();
        divBox.classList.add("js-box");
        boxesEl.append(divBox)
      } 
    }


    function destroyBoxes() {
      [...boxesEl.children].forEach(element => {
        element.remove();
      })
};

  function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }



   


   