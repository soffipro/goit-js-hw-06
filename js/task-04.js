let  counterValue = 0;

const divRef = document.querySelector('#counter');

const firstBtn = divRef.querySelector('[data-action="decrement"]');
const secondBtn = divRef.querySelector('[data-action="increment"]');
const spanRef = divRef.querySelector('#value');


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
