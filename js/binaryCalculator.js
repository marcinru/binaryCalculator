document.addEventListener('DOMContentLoaded', () => {
    const res = document.getElementById('res');

    document.getElementById('btn0').addEventListener('click', () => {
        res.innerText = res.innerText + '0';
    });

    document.getElementById('btn1').addEventListener('click', () => {
        res.innerText = res.innerText + '1';
    });

    document.getElementById('btnClr').addEventListener('click', () => {
        res.innerText = '';
    });
});
