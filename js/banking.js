// handle deposit button
document.getElementById('deposit-button').addEventListener('click',function() {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)
    // console.log(depositAmount);
 //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
const newDepositTotal = previousDepositAmount + newDepositAmount;
     depositTotal.innerText = newDepositTotal;
     // update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

//clear deposit 
     depositInput.value = '';
});

// handle withdraw eventhandler
document.getElementById('withdraw-button').addEventListener('click',function(){
  const withrawInput = document.getElementById('withdraw-input');
  const withdrawAmountText = withrawInput.value;
  const newWithdrawTotal = parseFloat(withdrawAmountText);
//   console.log(withdrawAmountText);

// update withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawText);
const newWithdrawAmount = newWithdrawTotal + previousWithdrawAmount;
withdrawTotal.innerText = newWithdrawAmount;

//update balance total
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

// /clear withdraw input
withrawInput.value = '';
})

