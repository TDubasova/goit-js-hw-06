const input = document.querySelector("#validation-input");

input.addEventListener("focus", onInputFocus);
input.addEventListener("blur", onInputBlur);

function onInputFocus() {
  input.value = "";
  input.classList.remove("invalid");
  input.classList.remove("valid");
};

function onInputBlur() {
  input.value.length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
};
