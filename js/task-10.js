// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

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

buttonDestroy.addEventListener('click', handlerDestroyBoxes)


    function handlerGreateBoxes() {
      createBoxes(input.value)
    }

function handlerDestroyBoxes() {
  divBox.remove();
    }


    function createBoxes(amount) {

      const defaultSize = 30;
      const increaseValue = 10;

      for (let i = 0; i < amount; i += 1) {
        let divBox = document.createElement('div');
        divBox.style.width = (defaultSize + i * increaseValue) + 'px';
        divBox.style.height = (defaultSize + i * increaseValue) + 'px';
        divBox.style.backgroundColor = getRandomHexColor();
        boxesEl.append(divBox)
      } 
    }








  





    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }



    // Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


    // const DEFAULT_SIZE = 30;
    // const DEFAULT_ADDITION = 10;




    // function createBoxes(amount) {
    //   const childrenCount = divBox.children.length;
    //   let items = [];
    //   for (let i = 0; i < amount; i++) {
    //     let item = document.createElement('div');
    //     item.style.height = item.style.width = DEFAULT_SIZE + DEFAULT_ADDITION * (i + childrenCount) + 'px';
    //     item.style.backgroundColor = getRandomHexColor();
    //     items.push(item);
    //   }
    //   divBox.append(...items);
    // }

    // btnCreate.addEventListener('click', () => {
    //   createBoxes(input.value);
    // });

    // btnDestroy.addEventListener('click', () => {
    //   [...divBox.children].forEach(element => {
    //     element.remove();
    //   });
    // });