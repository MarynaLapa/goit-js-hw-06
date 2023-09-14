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
// const categoriesItemTitle = document.querySelectorAll('.item h2')
// console.log(categoriesItemTitle); //NodeList(3) [h2, h2, h2]

const firstElementInList = categoriesList.firstElementChild;
// console.log(firstElementInList); // <li class="item">
                                      // <h2>Animals</h2>
                                      // <ul>
                                        // <li>Cat</li>
                                        // <li>Hamster</li>
                                        // <li>Horse</li>
                                        // <li>Parrot</li>
                                      // </ul>
                                    //</li>
// const listInfirstElement = firstElementInList.querySelectorAll('li')
// console.log(listInfirstElement) // NodeList(4)[li, li, li, li]
// let totalFirstListItem = 0;
// listInfirstElement.forEach(element => totalFirstListItem += 1);
// console.log('Category:', categoriesItemTitle[0].textContent);
// console.log("Elements:", totalFirstListItem);  
 

const secondElementInList = firstElementInList.nextElementSibling;
// console.log(secondElementInList);// <li class="item">
                                      // <h2>Products</h2>
                                      // <ul>
                                        // <li>Bread</li>
                                        // <li>Prasley</li>
                                        // <li>Cheese</li>
                                      // </ul>
                                    // </li>
// const listInSecondElement = secondElementInList.querySelectorAll('li');    
// let totalSecondListItem = 0;               
// listInSecondElement.forEach(element => totalSecondListItem +=1 )
// console.log('Category:', categoriesItemTitle[1].textContent);
// console.log("Elements:", totalSecondListItem); 


const lastElementInList = categoriesList.lastElementChild;
// const listInLastElement = lastElementInList.querySelectorAll('li');
// let totalLastListItem = 0;
// listInLastElement.forEach(element => totalLastListItem += 1)
// console.log('Category:', categoriesItemTitle[2].textContent);
// console.log("Elements:", totalLastListItem); 


function countItem(a) {  
  const listInItem = a.querySelectorAll('li');
  const titleText = a.querySelector('h2');
  totalItem = 0;               
  listInItem.forEach(element => totalItem +=1 )
  console.log('Category:', titleText.textContent);
  console.log("Elements:", totalItem); 
}

countItem(firstElementInList);
countItem(secondElementInList);
countItem(lastElementInList);