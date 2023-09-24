let result = document.getElementById('result');
let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    result.textContent = currentInput;
}

function clearResult() {
    currentInput = '';
    result.textContent = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        result.textContent = currentInput;
    } catch (error) {
        result.textContent = 'Error';
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        result.textContent = currentInput;
    }
}
