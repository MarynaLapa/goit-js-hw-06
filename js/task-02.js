// HTML містить порожній список ul#ingredients.

// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ListIngredients = document.querySelector('#ingredients');
console.log(ListIngredients);// <ul id="ingredients">
                                // <li class="item">Potatoes</li>
                                // <li class="item">Mushrooms</li>
                                // <li class="item">Garlic</li>
                                // <li class="item">Tomatos</li>
                                // <li class="item">Herbs</li>
                                // <li class="item">Condiments</li>
                            //</ul >

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredients[i];
  ingredientsItem.classList.add("item");
  console.log(ingredientsItem); // <li class="item">Potatoes</li>
                                // <li class="item">Mushrooms</li>
                                // <li class="item">Garlic</li>
                                // <li class="item">Tomatos</li>
                                // <li class="item">Herbs</li>
                                // <li class="item">Condiments</li>
  ListIngredients.append(ingredientsItem); // appended вивів значення попорядку в списку ul#ingredients. 
}
