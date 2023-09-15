// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

{/* <ul class="gallery"></ul> */}

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const galleryListItem = images
  .map((image) => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img" width="300" height="200"/></li>`)
  .join("");
// console.log(galleryListItem);

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.

galleryList.insertAdjacentHTML("afterbegin", galleryListItem);

// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// const ima
galleryList.style.display = "flex";
galleryList.style.justifyContent = "center"
galleryList.style.listStyle = "none";
galleryList.style.padding = "0";
galleryList.style.margin = "0 auto"
galleryList.style.gap = "12px";