const currentOperand = document.querySelector('.current-operand');
const numbers = document.getElementsByClassName("number");
const point = document.querySelector('.point');
const allClear = document.querySelector('.all-clear');
const backDelete = document.querySelector('.delete');
const numberClick = (number) => {
    currentOperand.innerText += number.innerText;
}
[...numbers].map(number => {
    number.addEventListener('click', () => {
        numberClick(number);
    })
})
point.addEventListener('click', () => {
    if (currentOperand.innerText.indexOf('.') == -1) {
        numberClick(point);
    }
})
allClear.addEventListener('click', () => {
    currentOperand.innerText = '';
})
backDelete.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
})