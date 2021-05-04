// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на 
//правильное количество символов.

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
    input: document.querySelector('#validation-input'),
    number: document.querySelector('[data-action="data-length"]'),
    placeholder: document.querySelector('[data-action="placeholder"]'),
    active: document.querySelector('.active'),   
 };
   console.log(refs);
 
   // refs.input.addEventListener('focus', onInputFocus);
  refs.input.addEventListener('blur', onInputBlur);
 
  function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
  }
  
  function onInputBlur() {
   // console.log('Инпут потерял фокус - событие blur');
    console.log(this.value.length);
    console.log(this.getAttribute('data-length'));
    
    if (this.getAttribute('data-length') === this.value.length) { 
      this.classList.add('valid');
        } else {
      this.classList.add('invalid');
        }


    // if (this.getAttribute('data-length') > this.value.length) { 
    //   this.classList.remove('valid');
    //   this.classList.add('invalid');
    // } else {
    //   this.classList.remove('invalid');
    //   this.classList.add('valid');
    // }
    
  }
