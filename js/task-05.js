// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputEl = document.querySelector('#name-input');
console.log(inputEl);

inputEl.addEventListener('keydown', event => {
    console.log(event)
    const a = event
    if (a !== "") {
    console.log('ff')
}
})
