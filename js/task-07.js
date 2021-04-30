// Напиши скрипт, который реагирует на 
// изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')  
 };
 
refs.input.addEventListener('input', onControlerInput);
    
function onControlerInput(event) {
    console.log('Инпут получил фокус - событие focus');
    text.style.fontSize = event.currentTarget.value + "px";
  }
