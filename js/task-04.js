// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}

const refs = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter'),
};

console.log(counter);

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  refs.span.textContent = counterValue;
};

//console.log(increment);

const decrement = () => {
  counterValue -= 1;
  refs.span.textContent = counterValue;
};

refs.sub.addEventListener('click', increment);
refs.add.addEventListener('click', decrement);