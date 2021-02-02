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
            if (currentOperand.innerText === "0"){
                currentOperand.innerText = "";
            }
            if (currentOperand.innerText.length >= 14){
                currentOperand.setAttribute("id", "size");
            }
            if (currentOperand.innerText.length < 19){
                numberClick(number);
            }
        }
    })
});
[...operations].map(operation => {
    operation.addEventListener('click', () => {
        currentOperand.innerText = calculation() ?? currentOperand.innerText;
        currentOperand.removeAttribute("id", "");
        if (currentOperand.innerText) {
            previousOperand.innerText = currentOperand.innerText;
            previousOperand.innerText += operation.innerText;
            currentOperand.innerText = "";
        }
        else{
            if (previousOperand.innerText) {
                previousOperand.innerText = previousOperand.innerText.slice(0, -1);
                previousOperand.innerText += operation.innerText;
            }
        }
    })
})
const calculation = () => {
    const previous = parseFloat(previousOperand.innerText.slice(0, -1));
    const current = parseFloat(currentOperand.innerText);
    const operator = previousOperand.innerText.split(previous)[1];
    if (currentOperand.innerText) {
        if (operator === "+") {
            return previous + current;
        }
        else if (operator === "-") {
            return previous - current;
        }
        else if (operator === "*") {
            return previous * current;
        }
        else if (operator === "÷") {
            return previous / current;
        }
    }
}
equalOperation.addEventListener('click', () => {
    currentOperand.innerText = calculation() ?? currentOperand.innerText;
    if (currentOperand.innerText) {
        previousOperand.innerText = '';
    }
})
point.addEventListener('click', () => {
    if (currentOperand.innerText.indexOf('.') == -1) {
        if (!currentOperand.innerText) {
            currentOperand.innerText += 0 + point.innerText;
        }
        else {
            numberClick(point);
        }
    }
})
allClear.addEventListener('click', () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    currentOperand.removeAttribute("id", '');
})
backDelete.addEventListener('click', () => {
    if (!currentOperand.innerText) {
        const previous = previousOperand.innerText.slice(0, -1);
        currentOperand.innerText = previous;
        previousOperand.innerText = "";
    }
    else{
        currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    }
    if (currentOperand.innerText.length <= 14){
        currentOperand.removeAttribute("id", "");
    }
})