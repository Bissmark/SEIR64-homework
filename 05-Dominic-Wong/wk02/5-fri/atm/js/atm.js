$(document).ready(function () {


    // global balance variables in integer with $ sign removed
    let checkBalance = Number($('#checking-balance').text().substring(1));
    let savingBalance = Number($('#savings-balance').text().substring(1));

    $('.balance').addClass('zero'); // make background red, atm default 0 at load

    // function to evaluate balance to see if its 0 and add or remove class zero depending.
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

    const depositChecking = function () {
        const input = Number($('#checking-amount').val());
        checkBalance += input;
        $('#checking-balance').text(`$${checkBalance}`)
        evalBalance();
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

    const depositSavings = function () {
        const input = Number($('#savings-amount').val());
        savingBalance += input;
        $('#savings-balance').text(`$${savingBalance}`)
        evalBalance();
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

    $('#checking-deposit').on('click', depositChecking);
    $('#checking-withdraw').on('click', withdrawChecking);
    $('#savings-deposit').on('click', depositSavings);
    $('#savings-withdraw').on('click', withdrawSavings);

    // overdraft protection 
    // user inputs value to be withdrawn
    // current - evaluates the account button is attached to and determine whether balance will go to 0 to allow withdrawl. e===
    // goal - same as above but if 0 will further evaluate the other account to see if sufficient balance and take remainder out of that account.
    // update both balances

});