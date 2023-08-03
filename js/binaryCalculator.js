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
            console.log(found);
            return;
        }
        res.innerText = res.innerText + btn;
    });
});
