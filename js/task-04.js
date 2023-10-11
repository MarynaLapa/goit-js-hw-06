// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
     const counter = document.querySelector('#value');
    // console.log(counter.textContent)
    
    let counterValue = 0;

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

    const buttonDecrement = document.querySelector('[data-action="decrement"]');
    console.log(buttonDecrement);
    const declineClick = () => {
        counterValue -= 1;
        counter.textContent = counterValue;
        // console.log(counterValue);
    }


    const buttonIncrement = document.querySelector('[data-action="increment"]');
    console.log(buttonIncrement);
    const enlargeClick = () => {
        counterValue += 1;
        counter.textContent = counterValue;
        // console.log(counterValue);
    }

    buttonIncrement.addEventListener("click", enlargeClick);
    buttonDecrement.addEventListener("click", declineClick);

   

