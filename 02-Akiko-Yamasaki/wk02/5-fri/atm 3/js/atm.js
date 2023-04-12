//* Keep track of the checking and savings balances somewhere
//.
//* Add functionality so that a user can withdraw money from one of the bank accounts.
//* Make sure you are updating the display and manipulating the HTML of the page
//so a user can see the change.
//* Make sure the balance in an account can't go negative. If a user tries to
//withdraw more money than exists in the account, ignore the transaction.
//* When the balance of the bank account is $0 the background of that bank account
//should be red. It should be gray when there is money in the account.

//* What happens when the user wants to withdraw more money from the checking
//account than is in the account? These accounts have overdraft protection, so if
//a withdrawal can be covered by the balances in both accounts, take the checking
//balance down to $0 and take the rest of the withdrawal from the savings account.
//If the withdrawal amount is more than the combined account balance, ignore it.
//* Make sure there is overdraft protection going both ways

//* Add functionality so that a user can deposit money into one of the bank accounts.
//* Make sure you are updating the display and manipulating the HTML of the page
//so a user can see the change --> 
//add funtion take the value of the variable(#checking-amount)
//variable let total (#checking-balance)=0;
//total += checking-amount value;

$(document).ready(function(){
    

    let total = 0;
    const $depositBtn = $('#checking-deposit');
    let $checkBalance = $('#checking-balance');
    $checkBalance.addClass('.balance')
    //background of checkbalance need to go back to grey when the balance is more than 0
    const addCheck = function(){ 
    let $depositAmt = $('#checking-amount').val(); 
    const checkAmt = parseInt($depositAmt);
    total += checkAmt;
    $checkBalance.html(`$ ${total}`); 
    $checkBalance.removeClass('zero');  
};
$depositBtn.on('click', addCheck);



const $withdrawBtn = $('#checking-withdraw');

const withdrawCheck = function(){
    let $withdraw = $('#checking-amount').val(); 
    const withdrawAmt = parseInt($withdraw);
    let $checkBalance = $('#checking-balance');
    const superTotal = total + savingTotal;
    console.log(total, savingTotal, superTotal);
    if(withdrawAmt <= total){
    total -= withdrawAmt;
    $checkBalance.html(`$ ${total}`);
    }
    //leaving the first condition even though it was impied by the previous to be more precise
    else if(withdrawAmt > total && withdrawAmt < superTotal){
        const overflowAmt = total - withdrawAmt;
        
        $checkBalance.html(`$ 0`);
        total = 0;
        const newSuperTotal = overflowAmt + savingTotal;
        $('#savings-balance').html(`$ ${newSuperTotal}`);
        savingTotal = newSuperTotal;

        }
        // console.log(total, savingTotal, superTotal);
        else if(total === 0 ){
        $checkBalance.addClass('zero');
        }
        else{
            $checkBalance.removeClass('zero');
        }    
};

$withdrawBtn.on('click', withdrawCheck);
const $savDepBtn = $('#savings-deposit');

let savingTotal = 0;
const savingAdd = function (){
    const $savingDepAmt = $('#savings-amount').val();
    const savingDepAmt = parseInt($savingDepAmt);
    let $savBalance = $('#savings-balance');
    savingTotal += savingDepAmt;
    $savBalance.html(`$ ${savingTotal}`);
    $savBalance.removeClass('zero');
    
}
$savDepBtn.on('click', savingAdd);

//sum of withdraw does not show in the balance
const $SavWithdrawBtn = $('#savings-withdraw');
const withdrawSaving = function(){
    const $savingWithdrawAmt = $('#savings-amount').val();
    const savingWithdrawAmt = parseInt($savingWithdrawAmt);
    let $savBalance = $('#savings-balance');
    let superBalance = total + savingTotal;
    if(savingWithdrawAmt <= savingTotal){
    savingTotal -= savingWithdrawAmt;
    $savBalance.html(`$ ${savingTotal}`);
    }
    else if (savingWithdrawAmt > savingTotal && savingWithdrawAmt < superBalance){
        let overflow = savingTotal - savingWithdrawAmt;
        console.log("the rest of amount is", `xxx${overflow}xxx`);
        $savBalance.html(`$ 0`);
        savingTotal = 0;
        const newSuperBalance = overflow + total;
        console.log(newSuperBalance);
        $('#checking-balance').html(`$ ${newSuperBalance}`);
        total = newSuperBalance;

    }
    if(savingTotal === 0){
        $savBalance.addClass('zero');
    }
    else{
        $savBalance.removeClass('zero')
    }
}
$SavWithdrawBtn.on('click', withdrawSaving)





});




