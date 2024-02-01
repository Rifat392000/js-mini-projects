document.getElementById('deposit').addEventListener('click', () => {
    const deposit_amount = inputField('deposit-amount');
    const depo_balance =balanceState('depo-balance');
    const account_balance = balanceState('account-balance');
    setbalance('depo-balance',deposit_amount,depo_balance,account_balance,true);
});
