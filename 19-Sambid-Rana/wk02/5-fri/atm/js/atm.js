

//Checking
const $checkingAmount = $('#checking-amount');
const $checkingDepositButton = $('#checking-deposit');
const $checkingWithdrawButton = $('#checking-withdraw');

//Savings 
const $savingsAmount = $('#savings-amount');
const $savingsDepositButton = $('#savings-deposit');
const $savingsWithdrawButton = $('#savings-withdraw');


console.log($savingsAmount)

//Keep track of checking and savings bal
let $checkingBal = $('#checking-balance')//.text();
let $savingsBal = $('#savings-balance')//.text();
console.log($checkingBal, $savingsBal);


// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page


let depositAmountCheckings = 0; //chage to parseInt(value form browser)
let depositAmountSavings = 0;
// let withdrawAmountCheckings = 0;
// let withdrawAmountSavings = 0;

const depositMoneyCheckings = function () {

    depositAmountCheckings = parseInt($checkingAmount.val()) + depositAmountCheckings;
    console.log(`Deposit Checkings: ${depositAmountCheckings}`)

    $checkingBal.text("$" + depositAmountCheckings).removeClass('zero', depositAmountCheckings > 0)
    $checkingAmount.val('') //clear input field


    return depositAmountCheckings

}

const depositMoneySavings = function () {
    depositAmountSavings = parseInt($savingsAmount.val()) + depositAmountSavings;
    console.log(`Deposit Savings: ${depositAmountSavings}`);

    $savingsBal.text("$" + depositAmountSavings).removeClass('zero', depositAmountSavings > 0)
    $savingsAmount.val('') //clear input field

    return depositAmountSavings
}

$checkingDepositButton.on('click', depositMoneyCheckings)
$savingsDepositButton.on('click', depositMoneySavings)


// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// * Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.



const withdrawMoneyCheckings = function () {

    if (depositAmountCheckings >= parseInt($checkingAmount.val())) {


        depositAmountCheckings = depositAmountCheckings - parseInt($checkingAmount.val())

        console.log(`Withdrew Checkings: total bal left ${depositAmountCheckings}`);



        $checkingBal.text("$" + depositAmountCheckings).addClass('zero', depositAmountCheckings === 0)
        $checkingAmount.val('') //clear input field

        return depositAmountCheckings;

    } else {
        overdraftProtection()
        return depositAmountCheckings
    }

}




const withdrawMoneySavings = function () {

    if (depositAmountSavings >= parseInt($savingsAmount.val())) {


        depositAmountSavings = depositAmountSavings - parseInt($savingsAmount.val());

        console.log(`Withdrew Savings: total bal left ${depositAmountSavings}`);

        $savingsBal.text("$" + depositAmountSavings).addClass('zero', depositAmountSavings === 0)
        $savingsAmount.val('') //clear input field

        return depositAmountSavings;

    } else {
        overdraftProtection()
        return depositAmountSavings
    }
}

$checkingWithdrawButton.on('click', withdrawMoneyCheckings);
$savingsWithdrawButton.on('click', withdrawMoneySavings);





// What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it



const overdraftProtection = function () {

    let combinedBal = depositAmountCheckings + depositAmountSavings;
    let overdraft;

    if (depositAmountCheckings < parseInt($checkingAmount.val())) {



        if (combinedBal >= parseInt($checkingAmount.val())) {

            overdraft = parseInt($checkingAmount.val()) - depositAmountCheckings; //bal that needs to te subtracted from Savings
            $checkingBal.text('$0');
            $savingsBal.text(`$${parseInt($savingsAmount.val()) - overdraft}`);


            console.log(`Your over draft amount is: ${overdraft}`)

        }

        console.log(`Your combined bal: $${combinedBal}`);
    }

    if (depositAmountSavings < parseInt($savingsAmount.val())) {

        if (combinedBal >= parseInt($savingsAmount.val())) {
            overdraft = parseInt($savingsAmount.val()) - depositAmountSavings;// balance that need to be subtracted from checkings

            $savingsBal.text('$0');
            $checkingBal.text(`$${parseInt($checkingAmount.val()) - overdraft}`);

            console.log(`Your over draft amount is: ${overdraft}`)

        }

        console.log(`Your combined bal: $${combinedBal}`);

    }

}

console.log($checkingAmount, $checkingDepositButton, $checkingWithdrawButton)







