const numberOfCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategoriesEl.length}`);

const categoryEl = document.querySelector("#categories");

const firstItemEl = categoryEl.firstElementChild;
const firstItemTitleEl = firstItemEl.querySelector("h2").textContent;
const numberElementsOfFirstItemEl = firstItemEl.querySelectorAll("li");
console.log(`Category: ${firstItemTitleEl}`);
console.log(`Elements: ${numberElementsOfFirstItemEl.length}`);

const secondItemEl = firstItemEl.nextElementSibling;
const secondItemTitleEl = secondItemEl.querySelector("h2").textContent;
const numberElementsOfSecondItemEl = secondItemEl.querySelectorAll("li");
console.log(`Category: ${secondItemTitleEl}`);
console.log(`Elements: ${numberElementsOfSecondItemEl.length}`);

const thirdItemEl = categoryEl.lastElementChild;
const thirdItemTitleEl = thirdItemEl.querySelector("h2").textContent;
const numberElementsOfThirdItemEl = thirdItemEl.querySelectorAll("li");
console.log(`Category: ${thirdItemTitleEl}`);
console.log(`Elements: ${numberElementsOfThirdItemEl.length}`);
