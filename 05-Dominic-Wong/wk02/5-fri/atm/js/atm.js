// create deposit function
    // takes a number and add to balance.
    // function takes number as argument i.e. how much to deposit

// const deposit = function ( number, balance ) {
//     return balance += number;
// }
    
// // create withdraw function
//     // takes in a number as argument
//     // balance cant be below 0 - if statement

// const withdraw = function ( number, balance) {
//     if ( number < balance ) {
//         return balance -= number;
//     }
// }

// global balance variables in integer with $ sign removed
let checkBalance = Number($('#checking-balance').text().substring(1));
let savingBalance = Number($('#savings-balance').text().substring(1));

$('.balance').addClass('zero'); // make background red, atm default 0 at load

const depositChecking = function () {
    const input = Number($('#checking-amount').val());
    checkBalance += input;
    $('#checking-balance').text(`$${checkBalance}`).removeClass('zero');
}

const withdrawChecking = function () {
    const input = Number($('#checking-amount').val());

    if ( input <= checkBalance) {
        checkBalance -= input
        if ( checkBalance === 0 ) {
            $('#checking-balance').addClass('zero');
        }
        $('#checking-balance').text(`$${checkBalance}`);
    }
}

const depositSavings = function () {
    const input = Number($('#savings-amount').val());
    savingBalance += input;
    $('#savings-balance').text(`$${savingBalance}`).removeClass('zero');
}

const withdrawSavings = function () {
    const input = Number($('#savings-amount').val());

    if ( input <= savingBalance) {
        savingBalance -= input;
        if ( savingBalance === 0 ) {
            $('#savings-balance').addClass('zero');
        }
        $('#savings-balance').text(`$${savingBalance}`);
    }
}

$('#checking-deposit').on('click', depositChecking);
$('#checking-withdraw').on('click', withdrawChecking);
$('#savings-deposit').on('click', depositSavings);
$('#savings-withdraw').on('click', withdrawSavings);