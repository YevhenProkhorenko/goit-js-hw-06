const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul')

for (let i = 0; i < ingredients.length; i += 1){
  const addEl = document.createElement('li');
  addEl.textContent = ingredients[i];
  addEl.classList.add('item');
  listEl.append(addEl);
}

