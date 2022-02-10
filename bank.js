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
    if (dipositAmount > 0 && isNaN(dipositAmount) == false) {
        updateTotalField('total-deposit', dipositAmount);
        updateTotalbalance(dipositAmount);
    } else
        alert("Please enter a positive number");
})

// WithdrawEvent 
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawAmount = getInputValue('withdraw');
    if (withdrawAmount > 0 && isNaN(withdrawAmount) == false && (withdrawAmount < document.getElementById('total-balance').innerText)) {
        updateTotalField('total-withdraw', withdrawAmount);
        updateTotalbalance((-1 * withdrawAmount));
    } else
        alert("Please enter a positive number or your balance may be low");

})