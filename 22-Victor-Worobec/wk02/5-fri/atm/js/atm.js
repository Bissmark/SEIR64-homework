// *** Backend Functionality ***

//Create variables to keep track of the accounts
let accountCheckingTotal = 2;
let accountSavingsTotal = 5;

//Update HTML elements whilst also changing background to red if account is 0
const updateHTMLBalances = function () {

    //Update HTML elements with current account values
    $('#checking-balance').html(`$${ accountCheckingTotal }`);
    $('#savings-balance').html(`$${ accountSavingsTotal }`);

    //If accounts are 0, change relevant background to red by adding an HTML class of zero
    if (accountCheckingTotal <= 0) {
        $('#checking-balance').addClass('zero');
    } else {
        $('#checking-balance').removeClass('zero');
    }

    if (accountSavingsTotal <= 0) {
        $('#savings-balance').addClass('zero');
    } else {
        $('#savings-balance').removeClass('zero');
    }
}

//Retreive the current checking input value as an integer type, returns 0 if not a number (or empty)
const checkingInputFieldAsInt = function () {
    
    //Get the current input's string as an integer
    const input = parseInt($('#checking-amount').val());

    //If the current input is not a number, return 0. Otherwise return the number 
    if (isNaN(input)) {
        return 0;
    } else {
        return input;
    }
}

//Retreive the current savings input value as an integer type, returns 0 if not a number (or empty)
const savingsInputFieldAsInt = function () {

    //Get the current input's string as an integer
    const input = parseInt($('#savings-amount').val());

    //If the current input is not a number, return 0. Otherwise return the number 
    if (isNaN(input)) {
        return 0;
    } else {
        return input;
    }
}

//Withdraw from checking, accounting for overdraft
const withdrawFromChecking = function (amount) {
    
    //If checking has enough money
    if (accountCheckingTotal >= amount) { 
        accountCheckingTotal -= amount;
    } 
    
    //If checking doesn't have enough money, attempt to withdraw from savings
    else if (accountSavingsTotal >= amount) { 
        accountSavingsTotal -= amount;
    } 
    
    //If there is money across both account to process withdrawal, save the overdraft amount, clear account, subtract overdraft from alternate account
    else if (accountCheckingTotal + accountSavingsTotal >= amount) { 
        const overdraft = amount - accountCheckingTotal
        accountCheckingTotal -= accountCheckingTotal;
        accountSavingsTotal -= overdraft;
    }
}

//Withdraw from savings, accounting for overdraft
const withdrawFromSavings = function (amount) {
    
    //If savings has enough money
    if (accountSavingsTotal >= amount) { 
        accountSavingsTotal -= amount;
    } 
    
    //If savings doesn't have enough money, attempt to withdraw from checking
    else if (accountCheckingTotal >= amount) { 
        accountCheckingTotal -= amount;
    } 
    
    //If there is money across both account to process withdrawal, save the overdraft amount, clear account, subtract overdraft from alternate account
    else if (accountSavingsTotal + accountCheckingTotal >= amount) { 
        const overdraft = amount - accountSavingsTotal
        accountSavingsTotal -= accountSavingsTotal;
        accountCheckingTotal -= overdraft;
    }
}

// *** Main functionality ***
$(document).ready(function () {
    updateHTMLBalances(); 
    
    // Deposit checking
    $('#checking-deposit').on('click', function () {
        accountCheckingTotal += checkingInputFieldAsInt();
        updateHTMLBalances();
    });

    //Withdraw checking
    $('#checking-withdraw').on('click', function () {
        withdrawFromChecking(checkingInputFieldAsInt());
        updateHTMLBalances();
    });

    // Deposit savings
    $('#savings-deposit').on('click', function () {
        accountSavingsTotal += savingsInputFieldAsInt();
        updateHTMLBalances();
    });

    //Withdraw savings
    $('#savings-withdraw').on('click', function () {
        withdrawFromSavings(savingsInputFieldAsInt())
        updateHTMLBalances();
    });
});

// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?