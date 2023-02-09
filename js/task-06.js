const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", colorInputBlur);

function colorInputBlur() {
  inputEl.classList.remove("invalid", "valid");

  inputEl.value.length === inputElLength
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
