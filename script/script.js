const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const tipBtn = document.querySelectorAll('.main__tip-btn');
const tipAmount = document.querySelector('.main__output-number');
const tipAmountCustom = document.querySelector('.main__tip-input');
const total = document.getElementsByClassName('main__output-number')[1];
const clearOuptutBtn = document.querySelector('.main__output-btn');

tipBtn.forEach((btn) => {
    const newBtn = btn.textContent.trim().slice(0, -1);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tipAmountPerPerson = `${(newBtn * bill.value / 100)}`;
        tipAmount.textContent = `$${parseInt(tipAmountPerPerson / numberOfPeople.value).toFixed(2)}`;
        const totalPerPerson = `${(parseInt(bill.value)) + (newBtn * bill.value / 100)}`;
        total.textContent = `$${parseInt(totalPerPerson / numberOfPeople.value).toFixed(2)}`;
    });
});

tipAmountCustom.addEventListener('change', (e) => {
    e.preventDefault();
    const tipAmountPerPerson = `${(tipAmountCustom.value * bill.value / 100) / numberOfPeople.value}`;
    tipAmount.textContent = `$${parseInt(tipAmountPerPerson / numberOfPeople.value).toFixed(2)}`;
    const totalPerPerson = `${(parseInt(bill.value)) + (tipAmountCustom.value * bill.value / 100)}`;
    total.textContent = `$${parseInt(totalPerPerson / numberOfPeople.value).toFixed(2)}`;
});

clearOuptutBtn.addEventListener('click', () => {
    tipAmount.textContent = '$0';
    total.textContent = '$0';
    bill.value = '';
    numberOfPeople.value = '';
});
