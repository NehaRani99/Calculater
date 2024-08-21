
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        const result = eval(display.value);
        // Display the result
        display.value = result;
    } catch (error) {
        // Handle any errors (e.g., invalid expressions)
        display.value = 'Error';
    }
}
