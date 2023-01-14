const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", onInputRangeInput);

function onInputRangeInput () { 
 span.style.fontSize = `${input.value}px`;
};



