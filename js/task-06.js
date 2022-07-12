const textInput = document.querySelector("input");
const inputLength = parseInt(textInput.dataset.length);

function changeBorderColor(event) {
    if (event.currentTarget.value.length <= inputLength) {
        event.currentTarget.classList.add('valid');        
    }
    else {
        event.currentTarget.classList.add('invalid');    
    }
}
textInput.addEventListener("blur", changeBorderColor);