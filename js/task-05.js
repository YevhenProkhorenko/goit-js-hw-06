const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector("#name-output");
console.log(textInput);
const output = (textInput) => {
    if (textInput.currentTarget.value === ""|| textInput.currentTarget.value === " ") {
        return nameOutput.textContent = "Anonymous"
    }
    return nameOutput.textContent = textInput.currentTarget.value;
};
textInput.addEventListener("input", output);