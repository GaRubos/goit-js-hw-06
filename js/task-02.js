// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// const ingredientsList = document.querySelector("ul");

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");

// ingredientsList.innerHTML = list;

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const listOfIngredients = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = `${ingredient}`;
  return listEl;
});

ingredientsEl.append(...listOfIngredients);
console.log(ingredientsEl);
