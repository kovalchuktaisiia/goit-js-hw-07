// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

//  <input type="text" placeholder="Ваше имя?" id="name-input" />
//  <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('h1 > span'),
 };
   console.log(refs);

  //  refs.input.addEventListener('focus', onInputFocus);
  //  refs.input.addEventListener('blur', onInputBlur);
 
  function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
  }
  
  function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
  }

  refs.input.addEventListener('input', onInputChange);

  function onInputChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
  
