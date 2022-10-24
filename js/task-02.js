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
  console.log(oneEl);
  return oneEl;
});

listEl.append(...newEl);
console.log(listEl);