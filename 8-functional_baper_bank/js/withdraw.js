document.getElementById('withdraw').addEventListener('click', () => {

    const withdraw_amount = inputField('withdraw-amount');
    const withdraw_balance =balanceState('withdraw-balance');
    const account_balance = balanceState('account-balance');
    setbalance('withdraw-balance',withdraw_amount,withdraw_balance,account_balance,false);
});
