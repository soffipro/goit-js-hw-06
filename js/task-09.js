// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}
refs.btn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor()
  refs.body.style.backgroundColor = color;
  refs.span.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

