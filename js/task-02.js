const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ulRef = document.querySelector('#ingredients');
const liRefs = ingredients.map(ingr => {

  const liRef = document.createElement('li');
  liRef.textContent = ingr;
  liRef.className = "item";
  console.log(liRef);
  return liRef;
})

ulRef.append(...liRefs);


