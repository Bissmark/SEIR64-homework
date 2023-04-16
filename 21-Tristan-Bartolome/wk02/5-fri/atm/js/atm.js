//Objectives
//DOM selection, appending, removal, updating

$(document).ready(function() {
    //find a way to keep track of checking and saving
    let bankCheckingTotal = 0;
    let bankSavingTotal = 0;
    
    const HTMLBalance = function () {
        $('#checking-balance').html(`$${bankCheckingTotal}`);
        $('#savings-balance').html(`$${bankSavingTotal}`);

        if (bankCheckingTotal === 0) {
            $('#checking-balance').addClass('zero');
        } else {
            $('#checking-balance').removeClass('zero');
        }
        
        if (bankSavingTotal === 0) {
            $('#savings-balance').addClass('zero');
        } else {
            $('#savings-balance').removeClass('zero');
        }
    }

    const subtractChecking = function (account, amount) {
        if ((account - amount) > -1) {
            return acount - amount;
        } else {
            return account;
        }
    }

        const subtractSaving = function (account, amount) {
        if ((account - amount) > -1) {
            return acount - amount;
        } else {
            return account;
        }
    }

    const checkingIntValue = function () {
        return parseInt($('#checking-amount').val())
    }

    const savingIntValue = function () {
        return parseInt($('#savings-amount').val())
    }

    HTMLBalance();
    //deposit checking
    $('#checking-deposit').on('click', function() {
        bankCheckingTotal += checkingIntValue();
        HTMLBalance();
    });
    
    //withdraw checking
    $('#checking-withdraw').on('click', function() {
        bankCheckingTotal -= checkingIntValue();
        if(bankCheckingTotal >= 0) {
            HTMLBalance();
        }
    });
    
    //deoposit saving
    $('#savings-deposit').on('click', function() {
        bankSavingTotal += savingIntValue();
        HTMLBalance();
    });

    //withdraw saving
    $('#savings-withdraw').on('click', function() {
        bankSavingTotal -= savingIntValue();
        if(bankSavingTotal >= 0) {
            HTMLBalance();
        }
    });

    //prevent user from overdrafting

});

//add a function for user to deposit dosh into account

//make sure to update and manipulate the HTML for user to see on page

//add a function so that user can withdraw dosh

//make sure to update the display so user can see the changes


