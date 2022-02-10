// function
function getInputValue() {
    const di = document.getElementById('deposit');
    const nda = di.value;
    const ndaf = parseFloat(nda);
    di.value = '';
    return ndaf;
}


// DepositEvent
document.getElementById('deposit-button').addEventListener('click', function() {
    const nda = getInputValue();
    const dt = document.getElementById('total-deposit');
    const pda = dt.innerText;
    // update deposit 
    const ndt = parseInt(pda) + parseInt(nda);
    dt.innerText = ndt;

    // update balance
    const tb = document.getElementById('total-balance');
    const ptb = tb.innerText;
    const ntb = parseInt(ptb) + parseInt(nda);
    tb.innerText = ntb;
})

// WithdrawEvent 
document.getElementById('withdraw-button').addEventListener('click', function() {
    const wi = document.getElementById('withdraw');
    const nwa = wi.value;
    const wt = document.getElementById('total-withdraw');
    const pwt = wt.innerText;
    // update deposit 
    const nwt = parseInt(nwa) + parseInt(pwt);
    wt.innerText = nwt;
    wi.value = '';
    // update balance
    const tb = document.getElementById('total-balance');
    const ptb = tb.innerText;
    const ntb = parseInt(ptb) - parseInt(nwa);
    tb.innerText = ntb;

})