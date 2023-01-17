const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.span.textContent = event.currentTarget.value;
});

refs.input.addEventListener("blur", () => {
  refs.span.textContent = "Anonymous";
  refs.input.value = '';
});