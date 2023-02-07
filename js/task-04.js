let counterValue = 0;

let total = document.querySelector("#value");

const decrementNumber = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementNumber = document.querySelector(
  'button[data-action="increment"]'
);

const decreaseValue = () => {
  counterValue -= 1;
  total.textContent = counterValue;
};

const increaseValue = () => {
  counterValue += 1;
  total.textContent = counterValue;
};

decrementNumber.addEventListener("click", decreaseValue);
incrementNumber.addEventListener("click", increaseValue);
