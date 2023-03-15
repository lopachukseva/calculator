let firstNum = '';
let secondNum = '';
let sign = '';
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'X', '/']


const out = document.querySelector('.calculator .num-field p');


let buttons = document.querySelector('.calculator-buttons');

buttons.onclick = (event) => {
    if (!event.target.classList.contains('calculator-button')) return;
    if (event.target.classList.contains('clear')) {
        firstNum = '';
        secondNum = '';
        sign = '';
        finish = false;
        out.textContent = 0;
    }

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (secondNum === '' && sign === '') {
            firstNum += key;
            out.textContent = firstNum;
        }
        else if (firstNum !== '' && secondNum !== '' && finish) {
            finish = false;
            secondNum = key;
            out.textContent = secondNum;
        }
        else {
            secondNum += key;
            out.textContent = secondNum;
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = key;
    }

    if (key === '=') {
        if (secondNum === '') secondNum = firstNum;
        switch (sign) {
            case "+":
                firstNum = (+firstNum) + (+secondNum);
                break;
            case "-":
                firstNum = (+firstNum) - (+secondNum);
                break;
            case "X":
                firstNum = (+firstNum) * (+secondNum);
                break;
            case "/":
                if (secondNum === '0') {
                    out.textContent = 'Error';
                    firstNum = '';
                    secondNum = '';
                    sign = '';
                    return;
                }
                else {
                    firstNum = (+firstNum) / (+secondNum);
                    break;
                }
        }
        finish = true
        if (String(firstNum).length > 7) {
            outText = String(firstNum).slice(1, 8)
        }
        else {
            outText = String(firstNum)
        }
        out.textContent = outText;
    }
}