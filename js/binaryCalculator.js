document.addEventListener('DOMContentLoaded', () => {
    const res = document.getElementById('res');

    document.getElementById('btns').addEventListener('click', event => {
        const btn = event.target.innerText;
        if (btn === 'C') {
            res.innerText = '';
            return;
        }
        if (btn === '=') {
            const regex = /\d+/g;
            const found = res.innerText.match(regex);
            const [num1, num2] = found.map(num => parseInt(num, 2));
            res.innerText = (num1 + num2).toString(2);
            return;
        }
        res.innerText = res.innerText + btn;
    });
});
