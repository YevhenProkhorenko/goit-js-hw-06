const textInput = document.querySelector("input");
const inputLength = parseInt(textInput.dataset.length);

function changeBorderColor(event) {
    if (event.currentTarget.value.length === inputLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid')
    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
        
    }
}
textInput.addEventListener("blur", changeBorderColor);