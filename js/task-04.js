let  counterValue = 0;

const divRef = document.querySelector('#counter');
console.log(divRef);
const firstBtn = divRef.querySelector('[data-action="decrement"]');
const secondBtn = divRef.querySelector('[data-action="increment"]');
const spanRef = divRef.querySelector('#value');

console.log(firstBtn, secondBtn);
firstBtn.addEventListener('click',decrement );
secondBtn.addEventListener('click', increment);


function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}
console.log(spanRef)











// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.


// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.