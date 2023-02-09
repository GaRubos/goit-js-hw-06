const menuItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByClass.length}.`); // ..

for (let i = 0; i < menuItemsByClass.length; i += 1) {
  const title = menuItemsByClass[i].firstElementChild;
  const category = menuItemsByClass[i].lastElementChild;
  const item = category.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${item.length}`);
}
