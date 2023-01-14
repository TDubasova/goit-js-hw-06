const refs = {
  divWidget: document.querySelector(".widget"),
  spanBackgroundColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onButtonchangecolorClick);

function onButtonchangecolorClick() {
  refs.divWidget.style.backgroundColor = getRandomHexColor();
  refs.spanBackgroundColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
