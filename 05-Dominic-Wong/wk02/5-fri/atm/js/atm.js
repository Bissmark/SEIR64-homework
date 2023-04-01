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

    const withdrawChecking = function () {
        let input = Number($('#checking-amount').val());

        // overdraft withdrawl
        if ( input > checkBalance) {
            if ( input <= checkBalance + savingBalance ) {
                input -= checkBalance; // reduce input by checkBalance
                checkBalance = 0; // reduce balance to 0 
                savingBalance -= input; // reduce savingBalance by remaining input

                evalBalance();
                $('#checking-balance').text(`$${checkBalance}`)
                $('#savings-balance').text(`$${savingBalance}`)
            }
        }
        // normal withdrawl
        if ( input <= checkBalance) {
            checkBalance -= input

            evalBalance();
            $('#checking-balance').text(`$${checkBalance}`);
        }
    }

    const withdrawSavings = function () {
        let input = Number($('#savings-amount').val());

        //overdraft withdrawl
        if ( input > savingBalance) {
            if ( input <= checkBalance + savingBalance ) {
                input -= savingBalance; // reduce input by savingBalance
                savingBalance = 0; // reduce balance to 0 
                checkBalance -= input; // reduce savingBalance by remaining input

                evalBalance();
                $('#checking-balance').text(`$${checkBalance}`)
                $('#savings-balance').text(`$${savingBalance}`)
            }
        }

        // normal withdrawl
        if ( input <= savingBalance) {
            savingBalance -= input;
            evalBalance();
            $('#savings-balance').text(`$${savingBalance}`);
        }
    }

    const deposit = function () {

        const input = Number($(this).siblings(".user-input").val()); // get user input 

        // check which deposit button user clicked and add dollaroos to appro balance
        if ( $(this).attr("id") === "checking-deposit") {
            checkBalance += input;
            $(this).siblings("#checking-balance").html(`$${checkBalance}`)

        } else if ( $(this).attr("id") === "savings-deposit" ) {
            savingBalance += input;
            $(this).siblings("#savings-balance").html(`$${savingBalance}`)
        }

        evalBalance();
    }

    
    evalBalance(); // run at load for default values.
    
    $('#checking-deposit').on('click', deposit);
    $('#checking-withdraw').on('click', withdrawChecking);
    $('#savings-deposit').on('click', deposit);
    $('#savings-withdraw').on('click', withdrawSavings);

});