const itemsOfCategories = document.querySelectorAll(".item");

function elementsOfItem() {
  console.log(`Number of categories: ${itemsOfCategories.length}`);

  for (const item of itemsOfCategories) {
    const itemTitle = item.querySelector("h2");
    const itemElements = item.querySelectorAll("li");
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemElements.length}`);
  }
}

elementsOfItem();
