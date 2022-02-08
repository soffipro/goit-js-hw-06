// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//  подставляет его текущее значение в span#name - output.Если инпут пустой,
//   в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input');
console.log(inputRef);

const spanRef = document.querySelector('#name-output');
console.log(spanRef);


inputRef.addEventListener("input", (event) => {
  // spanRef.textContent = event.currentTarget.value
  spanRef.textContent = inputRef.value;
  console.log(event);
});
