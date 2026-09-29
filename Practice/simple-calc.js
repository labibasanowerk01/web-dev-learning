let a = Number(prompt('Enter First Number'));
let b = prompt('Enter Operator');
let c = Number(prompt('Enter Second Number'));


function calculate() {
    if (b === '+') {
        return a + c;
    }

    if (b === '-') {
        return a - c;
    }

    if (b === '*') {
        return a * c;
    }

    if (b === '/') {
        if (c === 0) {
            return 'Undefined';
        }
        return a / c;
    }

    return 'Invalid operator';
}

alert(calculate());