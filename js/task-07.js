let rng = document.getElementById("font-size-control");
let text = document.getElementById("text");
rng.addEventListener("input", function () {
  text.style.fontSize = rng.value + "px";
});
