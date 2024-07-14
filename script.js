let display = document.getElementById('display');

function press(num) {
    display.value = display.value + num;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
