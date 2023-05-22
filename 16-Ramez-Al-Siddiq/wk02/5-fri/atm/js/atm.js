
    //Creating two variables for 'checking' and 'savings' to store balances.

    let checkingBalance = 0;
    let savingsBalance = 0;

    //Creating a new variable for the button

    const buttonChecking = $('#checking-deposit');

    //Creating a function that will update the display of the checking balance as the user deposits money into their checking account. 

    const updateCheckingBalance = function () {
        const checkingAmount = Number($('#checking-amount').val());
        checkingBalance += checkingAmount;
        $('#checking-balance').text("$" + checkingBalance);
    
    //Creating a condition to change the background color of the account to red when the balance is at $0. If there is money present in the account, the background color turns grey. 

        if (checkingBalance > 0) {
            $('#checking').removeClass('zero');
        } else {
            $('#checking').addClass('zero');
        }
    }
    buttonChecking.on('click', updateCheckingBalance);

    //Created a new variable for the button. 

    const buttonSavings = $('#savings-deposit');

    //Creating a new function to update the display of the savings balance once the user deposits money into their savings account. 

    const updateSavingsBalance = function () {
        const savingsAmount = Number($('#savings-amount').val());
        savingsBalance += savingsAmount;
        $('#savings-balance').text("$" + savingsBalance);

    //Same functionality as before but applied to savings account account.
    
        if (savingsBalance > 0) {
            $('#savings').removeClass('zero');
        } else {
            $('#savings').addClass('zero');
            }    
    }
    buttonSavings.on('click', updateSavingsBalance);

    //Creating a new variable to store the button.

    const buttonCheckingWithdraw = $('#checking-withdraw');
    
    //Creating a function to update the display once a user withdraws money from their checking balance. I have included a check to only allow withdrawals if the amount is less than or equal to the balance in the checking account. 
    
    //Also, checking if there is enough in both accounts to cover the withdrawal amount. 

    const updateWithdrawCheckingBalance = function () {
        const checkingWithdrawalAmount = Number($('#checking-amount').val());
        
        if (checkingWithdrawalAmount <= checkingBalance) {
            
            //Withdrawal can be covered by checking account balance.
            checkingBalance -= checkingWithdrawalAmount;
            $('#checking-balance').text('$' + checkingBalance);
        
            // Change background color
            if (checkingBalance > 0) {
            $('#checking').removeClass('zero');
            } else {
            $('#checking').addClass('zero');
            }
        } else {
            // Withdrawal exceeds checking account balance
            const remainingAmount = checkingWithdrawalAmount - checkingBalance;
        
            if (remainingAmount <= savingsBalance) {
                // Withdrawal can be covered by savings account balance
                checkingBalance = 0;
                savingsBalance -= remainingAmount;
                $('#checking-balance').text('$' + checkingBalance);
                $('#savings-balance').text('$' + savingsBalance);        
            
                // Change background color
                $('#checking').addClass('zero');
                if (savingsBalance > 0) {
                    $('#savings').removeClass('zero');
                } else {
                    $('#savings').addClass('zero');
                }
            } else {
                // Withdrawal cannot be covered by either account
                alert('Withdrawal amount exceeds account balances');
                }
        }
    } 
    buttonCheckingWithdraw.on('click', updateWithdrawCheckingBalance);

    //Creating a new variable to store the button.

    const buttonSavingsWithdraw = $('#savings-withdraw');
    
    //Creating a function to update the display once a user withdraws money from their savings balance. I have included a check to only allow withdrawals if the amount is less than or equal to the balance in the savings account. 

    const updateWithdrawSavingsBalance = function () {
        const savingsWithdrawalAmount = Number($('#savings-amount').val());
        if (savingsWithdrawalAmount <= savingsBalance) {
            //Withdrawal can be covered by savings account balance.
            savingsBalance -= savingsWithdrawalAmount;
            $('#savings-balance').text('$' + savingsBalance);
        
            // Change background color
        if (savingsBalance > 0) {
            $('#savings').removeClass('zero');
            } else {
            $('#savings').addClass('zero');
            }
        } else {
            // Withdrawal exceeds savings account balance
            const remainingAmount = savingsWithdrawalAmount - savingsBalance;
        
            if (remainingAmount <= checkingBalance) {
                // Withdrawal can be covered by checking account balance
                savingsBalance = 0;
                checkingBalance -= remainingAmount;
                $('#savings-balance').text('$' + savingsBalance);
                $('#checking-balance').text('$' + checkingBalance);        
            
                // Change background color
                $('#savings').addClass('zero');
                if (checkingBalance > 0) {
                    $('#checking').removeClass('zero');
                } else {
                    $('#checking').addClass('zero');
                }
            } else {
                // Withdrawal cannot be covered by either account
                alert('Withdrawal amount exceeds account balances');
                }
        }
    }
    buttonSavingsWithdraw.on('click', updateWithdrawSavingsBalance);


