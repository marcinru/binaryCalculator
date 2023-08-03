document.addEventListener('DOMContentLoaded', () => {
    const res = document.getElementById('res');

    document.getElementById('btns').addEventListener('click', event => {
        const btn = event.target.innerText;
        if (btn === 'C') {
            res.innerText = '';
            return;
        }
        if (btn === '=') {
            const regExpOperands = /\d+/g;
            const found = res.innerText.match(regExpOperands);
            const [num1, num2] = found.map(num => parseInt(num, 2));
            const regExpOperator = /\D/g;
            const [operator] = res.innerText.match(regExpOperator);
            let result = 0;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
            }
            res.innerText = result.toString(2);
            return;
        }
        res.innerText = res.innerText + btn;
    });
});
