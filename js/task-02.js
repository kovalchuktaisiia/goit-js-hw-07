const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().
const listElementContainer = document.querySelector('ul');
console.log(listElementContainer);

const makelistElementContainer = ingredients => {
    return ingredients.map(ingredient => {
      const listEl = document.createElement('li');
      li.textContent = ingredient[i];
      return listEl;
    });
  };

const elements = makelistElementContainer(ingredients);
listElementContainer.append(...elements);
