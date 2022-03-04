const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const tipBtn = document.querySelectorAll('.main__tip-btn');
const tipAmount = document.querySelector('.main__output-number');
const tipAmountCustom = document.querySelector('.main__tip-input');
const total = document.getElementsByClassName('main__output-number')[1];
const clearOuptutBtn = document.querySelector('.main__output-btn');
const billErrMsg = document.getElementsByClassName('main__input-err-msg')[0];
const numberOfPeopleErrMsg = document.getElementsByClassName('main__input-err-msg')[1];

const calculateTip = (input) => {
    const calculatedTipAmount = `${(input * bill.value / 100)}`;
    tipAmount.textContent = `$${parseFloat(calculatedTipAmount / numberOfPeople.value).toFixed(2)}`;
};

const calculateTotal = (input) => {
    const calculatedTotal = `${(parseFloat(bill.value)) + (input * bill.value / 100)}`;
    total.textContent = `$${parseFloat(calculatedTotal / numberOfPeople.value).toFixed(2)}`;
};

const removeActiveBtn = () => {
    tipBtn.forEach(btn => {
        btn.classList.remove('main__tip-btn--active');
    });
};

const enableResetBtn = () => {
    clearOuptutBtn.classList.add('main__output-btn--active');
    clearOuptutBtn.addEventListener('click', () => {
        tipAmount.textContent = '$0.00';
        total.textContent = '$0.00';
        clearOuptutBtn.classList.remove('main__output-btn--active');
    });
};

tipBtn.forEach((btn, i) => {
    const newBtn = btn.textContent.trim().slice(0, -1);

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (parseInt(bill.value) === 0 || bill.value === '') {
            bill.classList.add('main__input-field--err');
            billErrMsg.classList.remove('main__input-err-msg--hidden');
        } else {
            bill.classList.remove('main__input-field--err');
            bill.classList.add('main__input-field--success');
            billErrMsg.classList.add('main__input-err-msg--hidden');
        }

        if (parseInt(numberOfPeople.value) === 0 || numberOfPeople.value === '') {
            numberOfPeople.classList.add('main__input-field--err');
            numberOfPeopleErrMsg.classList.remove('main__input-err-msg--hidden');
        } else {
            numberOfPeople.classList.remove('main__input-field--err');
            numberOfPeople.classList.add('main__input-field--success');
            numberOfPeopleErrMsg.classList.add('main__input-err-msg--hidden');
        }

        if (parseInt(bill.value) !== 0 && bill.value !== '' && parseInt(numberOfPeople.value) !== 0 && numberOfPeople.value !== '') {
            removeActiveBtn();
            document.getElementsByClassName('main__tip-btn')[i].classList.add('main__tip-btn--active');
            calculateTip(newBtn);
            calculateTotal(newBtn);
            enableResetBtn();
        }
    });
});

tipAmountCustom.addEventListener('keyup', (e) => {
    e.preventDefault();

    if (parseInt(bill.value) === 0 || bill.value === '') {
        bill.classList.add('main__input-field--err');
        billErrMsg.classList.remove('main__input-err-msg--hidden');
    } else {
        bill.classList.remove('main__input-field--err');
        bill.classList.add('main__input-field--success');
        billErrMsg.classList.add('main__input-err-msg--hidden');
    }

    if (parseInt(numberOfPeople.value) === 0 || numberOfPeople.value === '') {
        numberOfPeople.classList.add('main__input-field--err');
        numberOfPeopleErrMsg.classList.remove('main__input-err-msg--hidden');
    } else {
        numberOfPeople.classList.remove('main__input-field--err');
        numberOfPeople.classList.add('main__input-field--success');
        numberOfPeopleErrMsg.classList.add('main__input-err-msg--hidden');
    }

    if (parseInt(tipAmountCustom.value) === 0 || tipAmountCustom.value === '') {
        tipAmountCustom.classList.add('err');
    } else {
        tipAmountCustom.classList.remove('err');
        tipAmountCustom.classList.add('success');
    }

    if (parseInt(bill.value) !== 0 && bill.value !== '' && parseInt(numberOfPeople.value) !== 0 && numberOfPeople.value !== '' && parseInt(tipAmountCustom.value) !== 0 && tipAmountCustom.value !== '') {
        removeActiveBtn();
        calculateTip(tipAmountCustom.value);
        calculateTotal(tipAmountCustom.value);
        enableResetBtn();
    }
});

tipAmountCustom.addEventListener('focus', () => {
    tipAmountCustom.placeholder = '';
});

tipAmountCustom.addEventListener('focusout', () => {
    tipAmountCustom.placeholder = 'Custom';
});
