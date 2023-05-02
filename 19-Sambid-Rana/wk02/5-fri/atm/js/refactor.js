//Refactoring ATM
$(document).ready(function () {


    //Checking
    const $checkingAmount = $('#checking-amount');
    const $checkingDepositButton = $('#checking-deposit');
    const $checkingWithdrawButton = $('#checking-withdraw');

    //Savings 
    const $savingsAmount = $('#savings-amount');
    const $savingsDepositButton = $('#savings-deposit');
    const $savingsWithdrawButton = $('#savings-withdraw');

    //Keep track of checking and savings bal
    let $checkingBalDisplay = $('#checking-balance')//.text();
    let $savingsBalDisplay = $('#savings-balance')//.text();

    // * Add functionality so that a user can deposit money into one of the bank accounts.
    // * Make sure you are updating the display and manipulating the HTML of the page

    //Using the Displayed amount as the starting balance and saving them to variables.
    let checkingsAccBal = parseInt($checkingBalDisplay.text().split('').splice(1).join(''))
    let savingsAccBal = parseInt($savingsBalDisplay.text().split('').splice(1).join(''));
    console.log(checkingsAccBal, savingsAccBal) //to keep track on console

    //if starting value is 0, change display 
    if (checkingsAccBal === 0) {
        $checkingBalDisplay.addClass('zero');
    }
    if (savingsAccBal === 0) {
        $savingsBalDisplay.addClass('zero');
    }

    //Change display function to be invoked if the bal is 0
    const displayChange = function () {

        if (checkingsAccBal === 0) {
            $checkingBalDisplay.addClass('zero');
        }
        if (savingsAccBal === 0) {
            $savingsBalDisplay.addClass('zero');

        }
        if (checkingsAccBal > 0) {
            $checkingBalDisplay.removeClass('zero');

        }
        if (savingsAccBal > 0) {
            $savingsBalDisplay.removeClass('zero');
        }
    }

    const depositMoney = function () { //can create a single function for Deposit and Withdraw respectively

        // Checking Account
        if (parseInt($checkingAmount.val())) { // expression to check if input in not blank & is a number

            checkingsAccBal = parseInt($checkingAmount.val()) + checkingsAccBal;

            $checkingBalDisplay.text("$" + checkingsAccBal);
            displayChange();
            $checkingAmount.val('') //clear input field

            console.log(`Deposit in Checkings - A/c total: $${checkingsAccBal}`)

            //not sure if i need a return statement ?
        } else {

            $checkingAmount.val('');

        }

        //Savings A/c
        if (parseInt($savingsAmount.val())) {

            savingsAccBal = parseInt($savingsAmount.val()) + savingsAccBal;
            $savingsBalDisplay.text("$" + savingsAccBal);
            displayChange();
            $savingsAmount.val('');

            console.log(`Deposit in Savings - A/c total: $${savingsAccBal}`);

        } else {

            $savingsAmount.val('');

        }



    }

    // * Add functionality so that a user can withdraw money from one of the bank accounts.
    const withdrawMoney = function () {

        //Checkings
        if (checkingsAccBal >= parseInt($checkingAmount.val())) {

            checkingsAccBal = checkingsAccBal - parseInt($checkingAmount.val())
            $checkingBalDisplay.text("$" + checkingsAccBal);
            displayChange();
            $checkingAmount.val('');

            console.log(`Withdrew from Checkings: Total Bal left $${checkingsAccBal}`);

        } else {

            overdraftProtection();
            $checkingAmount.val('');
        }

        //Savings
        if (savingsAccBal >= parseInt($savingsAmount.val())) {

            savingsAccBal = savingsAccBal - parseInt($savingsAmount.val());
            $savingsBalDisplay.text("$" + savingsAccBal);
            displayChange();
            $savingsAmount.val('');

            console.log(`Withdrew from Savings: Total Bal left $${savingsAccBal}`);

        } else {

            overdraftProtection();
            $savingsAmount.val('');
        }

    }
    // * Make sure you are updating the display and manipulating the HTML of the page
    // * Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

    // Savings A/c


    //On Click
    //Checking A/c
    $checkingDepositButton.on('click', depositMoney)
    $checkingWithdrawButton.on('click', withdrawMoney);

    //Savings A/c
    $savingsDepositButton.on('click', depositMoney)
    $savingsWithdrawButton.on('click', withdrawMoney);

    // What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. 
    // If the withdrawal amount is more than the combined account balance, ignore it

    //if user overdraw from any a/c
    // still need to refactor this function
    const overdraftProtection = function () {

        let overdraft;
        let combinedBal = checkingsAccBal + savingsAccBal;

        if (checkingsAccBal < parseInt($checkingAmount.val())) { //if checkings a/c is less than the checking amount entered then..

            if (combinedBal >= parseInt($checkingAmount.val())) { // && if combined bal is >= to the checking withdraw amount entered then...
                overdraft = parseInt($checkingAmount.val()) - checkingsAccBal; // save excess amount in overdraft // valEntered - amtCheckings
                console.log(`Your over draft amount is: ${overdraft}`)

                checkingsAccBal = 0; // checkings a/c will be zero 
                $checkingBalDisplay.text(`$${checkingsAccBal}`); // reflect the change on display of checkings a/c

                savingsAccBal = savingsAccBal - overdraft; //subtract overdraft amt from savings
                console.log(`Bal left in Savings: ${savingsAccBal}`);
                $savingsBalDisplay.text(`$${savingsAccBal}`); //reflect change after overdraft is subtracted

                $checkingBalDisplay.text("$" + checkingsAccBal) //.addClass('zero', checkingsAccBal === 0)
                displayChange();

                $checkingAmount.val('');


            } else {
                console.log(`invalid transaction: Your combined bal C.O.P = $${combinedBal}`);
                $checkingAmount.val('');
            }


        }

        if (savingsAccBal < parseInt($savingsAmount.val())) {//if savings a/c is less than the savings amount entered

            // let combinedBal = checkingsAccBal + savingsAccBal;

            if (combinedBal >= parseInt($savingsAmount.val())) { // && if combined bal is >- to the savings withdraw amount entered
                overdraft = parseInt($savingsAmount.val()) - savingsAccBal;// balance that need to be subtracted from checkings
                console.log(`Your over draft amount is: ${overdraft}`)

                savingsAccBal = 0 // savings acoount will be 0
                $savingsBalDisplay.text(`$${savingsAccBal}`); //change display text

                checkingsAccBal = checkingsAccBal - overdraft; //subtract overdraft from checkings a/c
                console.log(`Bal left in Checkings: ${checkingsAccBal}`)
                $checkingBalDisplay.text(`$${checkingsAccBal}`) // reflect change after overdraft is subtracted

                $savingsBalDisplay.text("$" + savingsAccBal)    //.addClass('zero', savingsAccBal === 0)
                displayChange()

                $savingsAmount.val('')


            } else {

                console.log(`Invalid transaction: Your combined bal S.O.P = $${combinedBal}`);
                $savingsAmount.val('')

            }

        }

    }


})

