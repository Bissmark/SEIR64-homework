//Plan
    // 1.--> store .val() of blanaces 
    // 2b.--> when user clicks withdraw button, the .val() of the 'enter amount' feild should SUBTRACT from the variables where the balance is stored
    // 2a.--> when user clicks deposit button, the .val() of the 'enter amount' feild should ADD to the the variables where the balance is stored
    // 3. --> if the user clicks the button when the input feild .val() is > than  the checking + saving accounts varibales - DO NOTHING
    // 4. --> Once a bank account variable reached $0, add a class to the associated account, the new class in CSS will change the background color to red (remove that class when more money is deposited).
    // 5a. --> If the amount wanting to be withdrawn, in either input feild, is < than the ammount in its associated account variable, the program should check what the combined balances of the accounts are.
    // 5b. --> If the combined amount is >= the desired amount to be withdrawn, clicking the button should subtract from that the single account's variable until it reaches $0. Once it reaches $0, it should subtract the remaining desired amount from the other account variable.

$(document).ready(function (){
     
    let checkingBalanceTotal = 0;
    let $checkingBalance = $('#checking-balance');
    $checkingBalance.html(`$${checkingBalanceTotal}.00`);
        
    let savingsBalanceTotal = 0;
    let $savingsBalance = $('#savings-balance');
    $savingsBalance.html(`$${savingsBalanceTotal}.00`);
        
//Checking Deposit

    $('#checking-deposit').on('click', function () {
        let checkingInput = Number($('#checking-amount').val());

        if (checkingInput > 0) { //so user cannot input negative values (also prevents inputing wrong data type)
            checkingBalanceTotal = checkingBalanceTotal + checkingInput;
            $checkingBalance.html(`$${checkingBalanceTotal.toFixed(2)}`);
        }
    //changes background to grey if account has more than 0 after deposit
        if (checkingBalanceTotal.toFixed(2) > 0) { 
            $checkingBalance.removeClass('bankBalanceEmpty');
        }
    })

//Checking Withdrawal

    $('#checking-withdraw').on('click', function () {
        let checkingInput = Number($('#checking-amount').val());

        if (checkingInput <= checkingBalanceTotal.toFixed(2) && checkingInput > 0) { //so user cannot over withdraw, also added .toFixed(2) to prevent the variable equalliing a long decimal and stoping the conditional
            checkingBalanceTotal = checkingBalanceTotal - checkingInput; 
            $checkingBalance.html(`$${checkingBalanceTotal.toFixed(2)}`);
    //Overdraft conditional
        } else if (checkingInput > checkingBalanceTotal && checkingInput <= savingsBalanceTotal + checkingBalanceTotal) {
            savingsBalanceTotal = (checkingBalanceTotal - checkingInput) + savingsBalanceTotal;
            checkingBalanceTotal = 0
            $checkingBalance.html(`$${checkingBalanceTotal.toFixed(2)}`);
            $savingsBalance.html(`$${savingsBalanceTotal.toFixed(2)}`);
        }
    //changes background to grey if account has more than 0 after deposit (added other account due to overdraft feature)
        if (checkingBalanceTotal.toFixed(2) <= 0) { 
            $checkingBalance.addClass('bankBalanceEmpty');
        }
        if (savingsBalanceTotal.toFixed(2) <= 0) {
            $savingsBalance.addClass('bankBalanceEmpty');
        } 

    })

//Savings Deposit

    $('#savings-deposit').on('click', function () {
        let savingsInput = Number($('#savings-amount').val());

        if (savingsInput > 0) {
        savingsBalanceTotal = savingsBalanceTotal + savingsInput; 
        $savingsBalance.html(`$${savingsBalanceTotal.toFixed(2)}`);
        }

        if (savingsBalanceTotal.toFixed(2) > 0) {
            $savingsBalance.removeClass('bankBalanceEmpty');
        }
    })

//Savings Withdrawl

    $('#savings-withdraw').on('click', function () {
        let savingsInput = Number($('#savings-amount').val())

        if (savingsInput <= savingsBalanceTotal.toFixed(2) && savingsInput > 0) {
            savingsBalanceTotal = savingsBalanceTotal - savingsInput; 
            $savingsBalance.html(`$${savingsBalanceTotal.toFixed(2)}`);

        } else if (savingsInput > savingsBalanceTotal && savingsInput <= checkingBalanceTotal + savingsBalanceTotal) { 
            checkingBalanceTotal = (savingsBalanceTotal - savingsInput) + checkingBalanceTotal;
            savingsBalanceTotal = 0
            $savingsBalance.html(`$${savingsBalanceTotal.toFixed(2)}`);
            $checkingBalance.html(`$${checkingBalanceTotal.toFixed(2)}`);
        }

        if (savingsBalanceTotal.toFixed(2) <= 0) {
            $savingsBalance.addClass('bankBalanceEmpty');
        }
        if (checkingBalanceTotal.toFixed(2) <= 0) {
            $checkingBalance.addClass('bankBalanceEmpty');
        }
    })
})

