const headEl = document.getElementById("header");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function(){
  headEl.innerHTML = "You press the button"
})
