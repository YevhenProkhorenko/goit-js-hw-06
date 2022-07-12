const textInput = document.querySelector('input');
const textEl = document.querySelector("#text");

console.log(textInput);
textInput.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";    
})
