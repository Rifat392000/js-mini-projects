function inputField(input){
    const inputvalue= document.getElementById(input).value;
    document.getElementById(input).value='';
        return parseFloat(inputvalue);
}

function balanceState(balance){
const balancevalue= document.getElementById(balance).innerText;
return parseFloat(balancevalue);

}

function setbalance(balance,inputvalue, balancevalue,account_balance,conditions){
    if (inputvalue !== '' && parseFloat(inputvalue)>0 && isFinite(inputvalue)){
    
  if(conditions){
    const new_balance=balancevalue+inputvalue;
    document.getElementById(balance).innerText=`${new_balance}`
    const new_account_balance=account_balance+inputvalue;
    document.getElementById('account-balance').innerText=`${new_account_balance}`
  }
  else{
    if(inputvalue<= account_balance){
        const new_balance=balancevalue+inputvalue;
        document.getElementById(balance).innerText=`${new_balance}`
        const new_account_balance=account_balance-inputvalue;
        document.getElementById('account-balance').innerText=`${new_account_balance}`
    }
    else{
        alert('user exit the limit');
    }
  }
    }
    else{
        // Your code for invalid input
        alert('Invalid input');
        document.getElementById(input).value='';
    }

}