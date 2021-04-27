// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const ul = document.createElement('ul');
// images.forEach(src => {
//     const li = document.createElement('li');
//     const image = document.createElement('img');
//     li.appendChild(image);
//     ul.appendChild(li);

//     image.setAttribute('src', src);
//     image.setAttribute('alt', 'random image');
// });

// document.body.insertBefore(ul, document.body.childNodes[0]);

const listElementContainer = document.querySelector('ul');
console.log(listElementContainer);


// images.forEach(src => {
//     const li = document.createElement('li');
//     const image = document.createElement('img');

//     image.setAttribute('src', src);
//     image.setAttribute('alt', 'random image');

//     li.appendChild(image);
//     listElementContainer.appendChild(li);

// });



const elements =[];
for (let i=0; i<images.length; i+=1) {
  const image = images[i];

  const imageEl = document.createElement('img');
  const liEl = document.createElement('li');
  
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.width = 260;
  liEl.append(imageEl);
  elements.push(liEl);
}

console.log(elements);
listElementContainer.append(...elements);