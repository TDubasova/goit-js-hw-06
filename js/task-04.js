const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.buttonDecrement.addEventListener("click", onButtonDecrementClick);
refs.buttonIncrement.addEventListener("click", onButtonIncrementClick);


function onButtonDecrementClick() {
  counter.decrement();
  refs.value.textContent = counter.counterValue;
}

function onButtonIncrementClick() {
  counter.increment();
  refs.value.textContent = counter.counterValue;
}

const counter = {
  counterValue: 0,

  increment() {
    return (this.counterValue += 1);
  },

  decrement() {
    return (this.counterValue -= 1);
  },
};


