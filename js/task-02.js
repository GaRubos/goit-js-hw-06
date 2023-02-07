const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("ul");

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");

ingredientsList.innerHTML = list;
