
// получаю доступ к <ul "categories">
const navEl = document.querySelector('ul');
//console.log(navEl);

const CategElements = navEl.querySelectorAll('.item');
//console.log(CategElements);
console.log(`В списке ${CategElements.length} категори`);

const CategElement = document.querySelector('li.item');
//console.log(`Категория: ${CategElement.firstElementChild.textContent}`);

const CategElementList = CategElement.lastElementChild;
//console.log(`Количество элементов: ${CategElementList.children.length}`);

 CategElements.forEach ((CategElement) => 
 console.log(`Категория: ${CategElement.firstElementChild.textContent}, 
Количество элементов: ${CategElement.lastElementChild.children.length}`));