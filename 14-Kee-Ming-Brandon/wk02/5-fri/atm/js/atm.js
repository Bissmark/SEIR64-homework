$( document ).ready( function () {

    // * Keep track of the checking and savings balances somewhere
    const $checkingBalance = $( '#checking-balance' );
    const $savingsBalance = $( '#savings-balance' );
    const $checkingAmount = $( '#checking-amount' );
    const $savingsAmount = $( '#savings-amount' );
    
    let checkingNumb = Number( $checkingBalance.text().slice( 1 ) );        // Assign only number
    let savingsNumb = Number( $savingsBalance.text().slice( 1 ) );          // Assign only number
    let totalNumb = checkingNumb + savingsNumb;                             // Total amount for overdraft function

    // Checking account Deposit function
    $( '#checking-deposit' ).on( 'click', function() {
        const checkingAmount = Number( $checkingAmount.val() );     
        if ( checkingAmount > 0 ) {
            checkingNumb += checkingAmount;                                 // calculate balance
            $checkingBalance.text( `$${ checkingNumb }` );
            printMessage( 'standard', 'deposited', checkingAmount, 'checking' );
        } else {                                                            // reject negative input value
            printMessage( 'negative', 'deposit', checkingAmount, 'checking' );
        };
    });

    // Checking account Withdraw function
    $( '#checking-withdraw' ).on( 'click', function() {
        const checkingAmount = Number( $checkingAmount.val() );

        if ( checkingAmount > totalNumb ) {                                 // withdrawn amount is more than total
            printMessage( 'notEnough', 'withdraw', checkingAmount );
        } else if ( checkingAmount > checkingNumb ) {                       // overdraft
            const overdrafted = checkingAmount - checkingNumb;              // overdraft account
            savingsNumb -= overdrafted;
            checkingNumb = 0;                                               // set current account to zero
            $checkingBalance.text( `$${ checkingNumb }` );
            $savingsBalance.text( `$${ savingsNumb }` );
            printMessage( 'overdraft', 'withdrawn', checkingAmount, 'savings', overdrafted );
        } else if ( checkingAmount > 0 ) {                                  // Direct withdraw
            checkingNumb -= checkingAmount;                                 // calculate balance
            $checkingBalance.text( `$${ checkingNumb }` );
            printMessage( 'standard', 'withdrawn', checkingAmount, 'checking' );
        } else {                                                            // reject negative input value
            printMessage( 'negative', 'withdraw', checkingAmount, 'checking' );
        };
    });

    //@@@@@@@@@@ SAVINGS ACCOUNT @@@@@@@@@@@

    // Saving account Deposit function
    $( '#savings-deposit' ).on( 'click', function() {
        const savingsAmount = Number( $savingsAmount.val() );
        if ( savingsAmount > 0 ) {
            savingsNumb += savingsAmount;                                   // calculate balance
            $savingsBalance.text( `$${ savingsNumb }` );
            printMessage( 'standard', 'deposited', savingsAmount, 'savings' );
        } else {                                                            // reject negative input value
            printMessage( 'negative', 'deposit', savingsAmount, 'savings' );
        };
    });

    // Saving account Withdraw function
    $( '#savings-withdraw' ).on( 'click', function() {
        const savingsAmount = Number( $savingsAmount.val() );

        if ( savingsAmount > totalNumb ) {                                  // withdrawn amount is more than total
            printMessage( 'notEnough', 'withdraw', savingsAmount );
        } else if ( savingsAmount > savingsNumb ) {                         // overdraft
            const overdrafted = savingsAmount - savingsNumb;                // overdraft amount
            checkingNumb -= overdrafted;
            savingsNumb = 0;                                                // set current account to zero
            $checkingBalance.text( `$${ checkingNumb }` );
            $savingsBalance.text( `$${ savingsNumb }` );
            printMessage( 'overdraft', 'withdrawn', savingsAmount, 'checking', overdrafted );
        } else if ( savingsAmount > 0 ) {                                   // Direct withdraw
            savingsNumb -= savingsAmount;                                   // calculate balance
            $savingsBalance.text( `$${ savingsNumb }` );
            printMessage( 'standard', 'withdrawn', savingsAmount, 'savings' );
        } else {                                                            // reject negative input value
            printMessage( 'negative', 'withdraw', savingsAmount, 'savings' );
        };

    });

    // actions to be done after each button click (must be placed after all onClick function)
    $( 'input[type="button"]' ).on( 'click', function() {
        $checkingAmount.val( '' );                                           // Clear input box (checking)
        $savingsAmount.val( '' );                                            // Clear input box (savings)
        totalNumb = checkingNumb + savingsNumb;                              // Get account total balance
        // Update background (checking)
        checkingNumb === 0 ? $( '#checking' ).addClass( 'zero' ) : $( '#checking' ).removeClass( 'zero' );
        // update background (savings)
        savingsNumb === 0 ? $( '#savings' ).addClass( 'zero' ) : $( '#savings' ).removeClass( 'zero' );
        $('.clear').fadeIn(300).delay(8000).fadeOut(300);
    });

    const printMessage = ( outcome, button, inputAmount, subAccount, overdraft ) => {
        const $display = $( '.clear' );
        if ( inputAmount === 0 ) {
            $display.text( `Please don't waste your time to ${ button } $0.` );
        } else if ( outcome === 'notEnough' ) {
            $display.text( `Unfortunately, your account total balance is less than $${ inputAmount }.` );
        } else if ( outcome === 'overdraft' ) {
            $display.text( `Overdraft protection: You have withdrawn $${ inputAmount } which $${ overdraft } is covered from your ${ subAccount } account.` );
        } else if ( outcome === 'standard' ) {
            $display.text( `You have ${ button } $${ inputAmount } on your ${ subAccount } account.` );
        } else {
            $display.text( `You can't ${ button } a nagative amount. If you would like to withdraw money, please enter a positive value and press the 'Withdraw' button.` );
        };
    };
});