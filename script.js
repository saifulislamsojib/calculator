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
            if (currentOperand.innerText.length === 14){
                currentOperand.setAttribute("id", "size");
            }
            if (currentOperand.innerText.length !== 19){
                numberClick(number);
            }
        }
    })
});
[...operations].map(operation => {
    operation.addEventListener('click', () => {
        currentOperand.innerText = withOutEval() ?? currentOperand.innerText;
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
const withOutEval = () => {
    const previous = parseFloat(previousOperand.innerText.slice(0, -1));
    const current = parseFloat(currentOperand.innerText);
    const operator = previousOperand.innerText.split(previous)[1];
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
equalOperation.addEventListener('click', () => {
    currentOperand.innerText = withOutEval() ?? currentOperand.innerText;
    if (currentOperand.innerText) {
        previousOperand.innerText = '';
    }
})
point.addEventListener('click', () => {
    if (currentOperand.innerText.indexOf('.') == -1) {
        numberClick(point);
    }
})
allClear.addEventListener('click', () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    currentOperand.removeAttribute("id", '');
})
backDelete.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    if (currentOperand.innerText.length === 14){
        currentOperand.removeAttribute("id", "");
    }
})