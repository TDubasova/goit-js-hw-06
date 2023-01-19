const refs = {
  divBoxes: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  buttonCreat: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
};

refs.buttonCreat.addEventListener("click", onButtoncreatClick);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

const totalAmount = [];

function onButtoncreatClick() {
  const carentAmount = Number(refs.input.value);
  totalAmount.push(carentAmount);
 
  const amount = totalAmount.reduce((previousValue, value) => {
    return previousValue + value;
  }, 0);
  
  createBoxes(amount);  
}

function createBoxes(amount) {
  refs.divBoxes.innerHTML = "";
  const boxArr = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * [i]}px`;
    box.style.height = `${30 + 10 * [i]}px`;
    
    boxArr.push(box)
  }

  refs.divBoxes.append(...boxArr);
  refs.divBoxes.innerHTML;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
  totalAmount.splice(0, totalAmount.length);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}