// function
// inputvalue
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const fieldtext = inputField.value;
    const fieldvalue = parseFloat(fieldtext);
    inputField.value = '';
    return fieldvalue;
}

// updatevalue
function updateTotalField(totalfield, Amount) {
    const totalAmount = document.getElementById(totalfield);
    const amountText = totalAmount.innerText;
    const amountValue = parseFloat(amountText);
    totalAmount.innerText = amountValue + Amount;
}

// update Total Balance
function updateTotalbalance(Amount) {
    const totalBalance = document.getElementById('total-balance');
    const previuosTotal = totalBalance.innerText;
    const newTotalBalance = parseFloat(previuosTotal) + Amount;
    totalBalance.innerText = newTotalBalance;
}

// DepositEvent
document.getElementById('deposit-button').addEventListener('click', function() {
    const dipositAmount = getInputValue('deposit');
    updateTotalField('total-deposit', dipositAmount);
    updateTotalbalance(dipositAmount);
})

// WithdrawEvent 
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw');
    updateTotalField('total-withdraw', withdrawAmount);
    updateTotalbalance((-1 * withdrawAmount));
})