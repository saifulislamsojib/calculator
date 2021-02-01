const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const numbers = document.getElementsByClassName("number");
const point = document.querySelector('.point');
const allClear = document.querySelector('.all-clear');
const backDelete = document.querySelector('.delete'); 
const operations = document.getElementsByClassName("operation");
const equalOperation = document.querySelector('.equal-operation');
const numberClick = (number) => {
    currentOperand.innerText += number.innerText;
}
[...numbers].map(number => {
    number.addEventListener('click', () => {
        if (number.innerText == "0") {
            if (currentOperand.innerText != "0") {
                numberClick(number);
            }
        }
        else {
            numberClick(number);
        }
    })
});
[...operations].map(operation => {
    operation.addEventListener('click', () => {
        if (currentOperand.innerText) {
            previousOperand.innerText = currentOperand.innerText;
            previousOperand.innerText += operation.innerText;
            currentOperand.innerText = "";
        }
    })
})
equalOperation.addEventListener('click', () => {
    const operand = previousOperand.innerText + currentOperand.innerText;
    currentOperand.innerText = eval(operand);
    previousOperand.innerText = '';
})
point.addEventListener('click', () => {
    if (currentOperand.innerText.indexOf('.') == -1) {
        numberClick(point);
    }
})
allClear.addEventListener('click', () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
})
backDelete.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
})