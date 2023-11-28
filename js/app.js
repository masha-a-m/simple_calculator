let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function calculateResult() {
    try {
        result.value = calculate(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function calculate(expression) {
    // Implement your own calculation logic here
    return Function('"use strict";return (' + expression + ')')();
}