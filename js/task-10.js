const refs = {
  divBoxes: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  buttonCreat: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
};

refs.buttonCreat.addEventListener("click", onButtonCreatClick);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function onButtonCreatClick() {
  let amount = Number(refs.input.value);

  counter.increment();
  createBoxes(amount);
}

const counter = {
  counterValue: 0,
  increment() {
    return (this.counterValue += 1);
  },
};

function createBoxes(amount) {
  refs.divBoxes.innerHTML = "";
  let clickCount = counter.counterValue;
  const arrayOfCreatedBoxes = [];

  for (let i = 0; i < amount * clickCount; i += 1) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();
    if (i >= 1) {
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
    }
    arrayOfCreatedBoxes.push(box);
  }
  refs.divBoxes.append(...arrayOfCreatedBoxes);
  refs.divBoxes.innerHTML;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
  counter.counterValue = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
