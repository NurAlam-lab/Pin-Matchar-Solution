function getPin() {
    const pinNum = Math.round(Math.random() * 10000);
    const pinString = pinNum + '';
    if (pinString.length == 4) {
        return pinNum;
    }
    else {
        // if there will be any pin number less than four degit then it will call this function again
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputDisplay = document.getElementById('key-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            inputDisplay.value = '';
        }
    }
    else {
        const previousNumber = inputDisplay.value;
        const newNumber = previousNumber + number
        inputDisplay.value = newNumber;
    }
})

function varifyPin() {
    const pinNumbers = document.getElementById('pin-input').value;
    const keyNumbers = document.getElementById('key-numbers').value;
    const errorMassage = document.getElementById('match-error');
    const successMassage = document.getElementById('match-success');
    if (pinNumbers == keyNumbers) {
        errorMassage.style.display = 'none';
        successMassage.style.display = 'block';
    }
    else {
        errorMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
}