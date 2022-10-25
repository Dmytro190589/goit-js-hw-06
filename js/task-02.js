const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const newEl = ingredients.map(element => {
  const oneEl = document.createElement('li');
  oneEl.textContent = element;
  oneEl.classList.add('item')
  return oneEl;
});

listEl.append(...newEl);
