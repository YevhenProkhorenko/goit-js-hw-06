const numberOfClicks = document.querySelector('#value');
let counterValue = 0;
const buttonEl = document.querySelectorAll('button');
console.log(buttonEl)


const clickDecrement = () => {
    counterValue -= 1;
    numberOfClicks.textContent = counterValue;
};
const clickIncrement = () => {
    counterValue += 1;
    numberOfClicks.textContent = counterValue;
}
buttonEl[0].addEventListener("click", clickDecrement);
buttonEl[1].addEventListener("click", clickIncrement);