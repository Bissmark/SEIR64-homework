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

const depositChecking = function () {
    let checkBalance = Number($('#checking-balance').text().substring(1));
    const input = Number($('#checking-amount').val());
    const sum = `$ ${input + checkBalance}`;
    $('#checking-balance').text(sum);
}

const withdrawChecking = function () {
    let checkBalance = Number($('#checking-balance').text().substring(1));
    const input = Number($('#checking-amount').val());

    if ( input <= checkBalance) {
        const sum = `$${ checkBalance - input }`;
        $('#checking-balance').text(sum);
    }
}

const depositSavings = function () {
    let checkBalance = Number($('#savings-balance').text().substring(1));
    const input = Number($('#savings-amount').val());
    const sum = `$ ${input + checkBalance}`;
    $('#savings-balance').text(sum);
}

const withdrawSavings = function () {
    let checkBalance = Number($('#savings-balance').text().substring(1));
    const input = Number($('#savings-amount').val());

    if ( input <= checkBalance) {
        const sum = `$${ checkBalance - input }`;
        $('#savings-balance').text(sum);
    }
}

$('#checking-deposit').on('click', depositChecking);
$('#checking-withdraw').on('click', withdrawChecking);
$('#savings-deposit').on('click', depositSavings);
$('#savings-withdraw').on('click', withdrawSavings);