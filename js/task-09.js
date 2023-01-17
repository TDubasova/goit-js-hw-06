const refs = {
  bodyEl: document.body,
  divWidget: document.querySelector(".widget"),
  spanDivwidget: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onButtonchangecolorClick);

function onButtonchangecolorClick() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.divWidget.style.backgroundColor = refs.bodyEl.style.backgroundColor;
  refs.spanDivwidget.textContent = refs.divWidget.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
