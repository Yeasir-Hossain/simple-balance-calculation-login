// DepositEvent
document.getElementById('deposit-button').addEventListener('click', function() {
    const di = document.getElementById('deposit');
    const nda = di.value;
    const dt = document.getElementById('total-deposit');
    const pda = dt.innerText;
    // update deposit 
    const ndt = parseInt(pda) + parseInt(nda);
    dt.innerText = ndt;
    di.value = '';
    // update balance
    const tb = document.getElementById('total-balance');
    const ptb = tb.innerText;
    const ntb = parseInt(ptb) + ndt;
    tb.innerText = ntb;
})

// WithdrawEvent 
document.getElementById('withdraw-button').addEventListener('click', function() {
    const wi = document.getElementById('withdraw');
    const wa = wi.value;
    const wt = document.getElementById('total-withdraw');
    wt.innerText = wa;
    wi.value = '';

})