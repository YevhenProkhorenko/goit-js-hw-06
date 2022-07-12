const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul')
const addEl = [];

const itemList = ingredients.map(ingredient => {
  const createEl = document.createElement('li');
  addEl.push(createEl);
  createEl.textContent = ingredient;
  createEl.classList.add('item');  
});
listEl.append(...addEl);


