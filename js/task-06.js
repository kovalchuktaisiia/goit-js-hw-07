// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const refs = {
    input: document.querySelector('input'),
   
 };
   console.log(refs);

//    refs.input.addEventListener('focus', onInputFocus);
//    refs.input.addEventListener('blur', onInputBlur);
 
  function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
  }
  
  function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
    
  }

  function onInputEnter(event) {
    input.len
    box.classList.add('box--active');
  }
  
  function onInputEnter(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
  }