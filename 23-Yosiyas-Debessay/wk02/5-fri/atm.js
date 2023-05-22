 // * Keep track of the checking and savings balances somewhere
    
 let checkingBalance = 0;
 let savingsBalance = 0;

 // * Add functionality so that a user can deposit money into one of the bank accounts.
 
//  const buttonChecking = $('#checking-deposit');
 
//  const updateBalanceDisplayChecking = function () {

//  const checkingAmount = $('#checking-amount').val();
 
//  }
//  $('buttonChecking').on('click', updateBalanceDisplayChecking);

//  const buttonSavings = $('#savings-deposit');

//  const updateBalanceDisplaySavings = function () {
 

//      const savingsAmount = $('#savings-amount').val();
//  }
//  $('buttonSavings').on('click', updateBalanceDisplaySavings);

 // * Make sure you are updating the display and manipulating the HTML of the page

 // so a user can see the change.

 // * Add functionality so that a user can withdraw money from one of the bank accounts.

const updateCheckingBalance = function () {
    $("#checking-balance").text("$" + checkingBalance);
}

const updateSavingsBalance = function () {
    $("#savings-balance").text("$" + savingsBalance);
}
 // * Make sure you are updating the display and manipulating the HTML of the page

 // so a user can see the change.
$("#checking-deposit").on("click", function() {
    let amount = $("#checking-amount").val();
    if (amount > 0) {
        checkingBalance += amount;
        updateCheckingBalance();

    } else if (checkingBalance > 0) {
        ("#checking").removeClass("zero");
    }
    }
);

$("#checking-withdraw").on("click", function() {
    let amount = $("#checking-amount").val();
    if (amount > 0 && < (checkingBalance + savingsBalance)) {
        checkingBalance = checkingBalance - amount;
    }
    else {
        checkingBalance = 0;
    }
}
//  // * Make sure the balance in an account can't go negative. If a user tries to.

//  if the user tries to withdraw more than checking balance + savings balance, return false.
// if 
//  // withdraw more money than exists in the account, ignore the transaction.

//  // * When the balance of the bank account is $0 the background of that bank account

//  if checking balance === 0 then turn color of account background color to red.

//  // should be red. It should be gray when there is money in the account.
//  // * What happens when the user wants to withdraw more money from the checking

//  if checking balance > 0 then turn color of account background color to gray.

//  // account than is in the account? These accounts have overdraft protection, so if
//  // a withdrawal can be covered by the balances in both accounts, take the checking
//  // balance down to $0 and take the rest of the withdrawal from the savings account.

//  if withdrawAmount is greater than savings and equal to savings plus checking, reduce checking account to 0 and take withdraw amount from savings. 

//  // If the withdrawal amount is more than the combined account balance, ignore it.

//  if withdrawAmount > savings + checking balance, return false. 

//  // * Make sure there is overdraft protection going both ways.

//  if withdrawAmount is greater than checking and equal to savings plus checking, reduce sacings account to 0 and take withdraw amount from checking. 

//  // * Are there ways to refactor your code to make it DRYer?