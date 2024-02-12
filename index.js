// CALCULATOR PROGRAM

// get display element
const display = document.getElementById("display");

// accesses the value in the display and append it with input
function appendToDisplay(input) {
    display.value += input;
}

// clears display bar
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); // eval function does the math with the display values
    } catch (error) {
        display.value = "Error";
    }
}