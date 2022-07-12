const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul')


const itemList = ingredients.map(ingredient => {
  const createEl = document.createElement('li');  
  createEl.textContent = ingredient;
  createEl.classList.add('item');
  return createEl;
});
listEl.append(...itemList);


