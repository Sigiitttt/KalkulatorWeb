let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}