const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("focus", () => {
  refs.input.placeholder = "";
});
refs.input.addEventListener("input", (event) => {
  refs.span.textContent = event.currentTarget.value;
});
refs.input.addEventListener("blur", () => {
  refs.span.textContent = "Anonymous";
  refs.input.value = refs.input.placeholder;
  refs.input.placeholder = "Please enter your name";
});
