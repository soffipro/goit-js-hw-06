// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается
//  в его атрибуте data - length.
// Если введено подходящее количество символов, 
// то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


const inputRef = document.querySelector('#validation-input')


inputRef.addEventListener('blur', (event) => {
  
  if (event.target.value.length === Number(event.target.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid')
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid')
  }
});
