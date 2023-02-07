const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", ColorInputBlur);

function ColorInputBlur() {
  if (
    inputEl.value.length < inputElLength ||
    inputEl.value.length > inputElLength
  ) {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  }
  if (inputEl.value.length === inputElLength) {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  }
}
