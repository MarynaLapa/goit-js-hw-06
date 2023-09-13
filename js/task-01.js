// Напиши скрипт, який:

/**
  |============================
  | // Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. 
        
        // Number of categories: 3
  |============================
*/
const categoriesList = document.querySelector('#categories');
const categoriesListItem = categoriesList.querySelectorAll('.item');
let totalItem = 0;
categoriesListItem.forEach(item => totalItem += 1)
console.log("Number of categories:", totalItem)

/**
  |============================
  | // Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього). 
    // Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
        
        // Category: Animals
        // Elements: 4

        // Category: Products
        // Elements: 3

        // Category: Technologies
        // Elements: 5
  |============================
*/

const categoriesItemTitle = document.querySelectorAll('.item h2')
// console.log(categoriesItemTitle) // NodeList(3)[h2, h2, h2]
categoriesItemTitle.forEach(element => {
    // console.log(element); // <h2>Animals</h2>, <h2>Products</h2>, <h2>Technologies</h2>
    console.log('Category:', element.textContent)
    })
    
