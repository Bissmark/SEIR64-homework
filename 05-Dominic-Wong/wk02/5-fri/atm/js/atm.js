$(document).ready(function () {

    // global - balance variables in integer with $ sign removed
    let checkBalance = Number($('#checking-balance').text().substring(1));
    let savingBalance = Number($('#savings-balance').text().substring(1));

    // function to evaluate balance to see if its 0 and add or remove class 'zero' depending.
    const evalBalance = function () {
        if ( checkBalance === 0 ) {
            $('#checking-balance').addClass('zero');
        } else {
            $('#checking-balance').removeClass('zero');
        }

        if ( savingBalance === 0 ) {
            $('#savings-balance').addClass('zero');
        } else {
            $('#savings-balance').removeClass('zero');
        }
    }
    
    const deposit = function () {

        const input = Number($(this).siblings(".user-input").val()); // get user input
        const isCheckBalance = $(this).attr("id") === "checking-deposit"; // see which account the input is related to

        // check which deposit button user clicked and add dollaroos to appro balance
        if ( isCheckBalance ) {
            checkBalance += input;
            $("#checking-balance").html(`$${checkBalance}`)

        } else {
            savingBalance += input;
            $("#savings-balance").html(`$${savingBalance}`)
        }

        evalBalance();
    }

    const withdraw = function () {
        
        let input = Number($(this).siblings(".user-input").val()); // get user input
        const isCheckBalance = $(this).attr("id") === "checking-withdraw"; // see what account input is related to
        const totalBalance = checkBalance + savingBalance;

        if ( isCheckBalance ) {
            if ( input <= checkBalance ) {
                checkBalance -= input;
            } else if ( input <= totalBalance ) {
                const remaining = input - checkBalance
                checkBalance = 0;
                savingBalance -= remaining;
            }
        } else {
            if ( input <= savingBalance ) {
                savingBalance -= input;
            } else if ( input <= totalBalance ) {
                const remaining = input - savingBalance;
                savingBalance = 0;
                checkBalance -= remaining;
            }
        }
        
        $("#checking-balance").html(`$${checkBalance}`)
        $("#savings-balance").html(`$${savingBalance}`)
        evalBalance();
    }

    evalBalance(); // run at load for default values.
    
    $('#checking-deposit').on('click', deposit);
    $('#checking-withdraw').on('click', withdraw);
    $('#savings-deposit').on('click', deposit);
    $('#savings-withdraw').on('click', withdraw);

});