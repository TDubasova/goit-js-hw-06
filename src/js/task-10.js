const refs = {
  divBoxes: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  buttonCreat: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
};

refs.buttonCreat.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  const arrayOfCreatedBoxes = [];

  const boxFirst = document.createElement("div");
  boxFirst.style.width = "30px";
  boxFirst.style.height = "30px";
  boxFirst.style.backgroundColor = getRandomHexColor();
  arrayOfCreatedBoxes.push(boxFirst);

  for (let i = 1; i <= (amount - 1); i += 1) {
    const boxNext = document.createElement("div");
    boxNext.style.width = `${30 + 10 * i}px`;
    boxNext.style.height = `${30 + 10 * i}px`;
    boxNext.style.backgroundColor = getRandomHexColor();
    arrayOfCreatedBoxes.push(boxNext);
  }

  refs.divBoxes.append(...arrayOfCreatedBoxes);
  refs.divBoxes.innerHTML;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
