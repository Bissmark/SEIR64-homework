const checkForZero = function () {
    $('.zero').removeClass('zero');

    const checkingBalance = + $('#checking-balance').text().slice(1);
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = + $('#savings-balance').text().slice(1);
    if (savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }
};

$(document).ready(function () {
    checkForZero();
    
    $('#checking-deposit').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1);
        const depositAmount = + $('#checking-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#checking-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#checking-withdraw').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1);
        const withdrawAmount = + $('#checking-amount').val();
        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });

    $('#savings-deposit').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1);
        const depositAmount = + $('#savings-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#savings-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#savings-withdraw').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1);
        const withdrawAmount = + $('#savings-amount').val();
        const otherBalance = + $('#checking-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#savings-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#savings-balance').text('$0');
            $('#checking-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });
});

// let checkingBalance = 100; // initial checking account balance
// let savingsBalance = 150; // initial savings account balance

// // update checking account balance display
// $('#checkingBalance').text('$' + checkingBalance);
// // update savings account balance display
// $('#savingsBalance').text('$' + savingsBalance);

// // function to handle deposit button clicks for checking account
// $('#checkingDeposit').click(function() {
// const amount = Number($('#checkingAmount').val());
// if (amount >= 0) { // only deposit positive amount
// checkingBalance += amount; // add amount to balance
// // update checking account balance display
// $('#checkingBalance').text('$' + checkingBalance);
// }
// $('#checkingAmount').val(''); // clear input field
// });

// // function to handle withdraw button clicks for checking account
// $('#checkingWithdraw').click(function() {
// const amount = Number($('#checkingAmount').val());
// if (amount >= 0 && amount <= checkingBalance) { // only withdraw positive amount and if enough balance
// checkingBalance -= amount; // subtract amount from balance
// // update checking account balance display
// $('#checkingBalance').text('$' + checkingBalance);
// }
// $('#checkingAmount').val(''); // clear input field

// if (checkingBalance <= 0) { // change background color if balance is zero or negative
// $('#checkingBalance').css('background-color', 'red');
// } else {
// $('#checkingBalance').css('background-color', 'gray');
// }
// });

// // function to handle deposit button clicks for savings account
// $('#savingsDeposit').click(function() {
// const amount = Number($('#savingsAmount').val());
// if (amount >= 0) { // only deposit positive amount
// savingsBalance += amount; // add amount to balance
// // update savings account balance display
// $('#savingsBalance').text('$' + savingsBalance);
// }
// $('#savingsAmount').val(''); // clear input field
// });

// // function to handle withdraw button clicks for savings account
// $('#savingsWithdraw').click(function() {
// const amount = Number($('#savingsAmount').val());
// if (amount >= 0 && amount <= savingsBalance) { // only withdraw positive amount and if enough balance
// savingsBalance -= amount; // subtract amount from balance
// // update savings account balance display
// $('#savingsBalance').text('$' + savingsBalance);
// }
// $('#savingsAmount').val(''); // clear input field

// if (savingsBalance <= 0) { // change background color if balance is zero or negative
// $('#savingsBalance').css('background-color', 'red');
// } else {
// $('#savingsBalance').css('background-color', 'gray');
// }
// });

// // let checkingBalance = 100; // initial checking account balance
// // let savingsBalance = 150; // initial savings account balance

// // // update checking account balance display
// // document.getElementById('checkingBalance').textContent = '$' + checkingBalance;
// // // update savings account balance display
// // document.getElementById('savingsBalance').textContent = '$' + savingsBalance;

// // // function to handle deposit button clicks for checking account
// // document.getElementById('checkingDeposit').addEventListener('click', function() {
// // const amount = Number(document.getElementById('checkingAmount').value);
// // if (amount >= 0) { // only deposit positive amount
// // checkingBalance += amount; // add amount to balance
// // // update checking account balance display
// // document.getElementById('checkingBalance').textContent = '$' + checkingBalance;
// // }
// // document.getElementById('checkingAmount').value = ''; // clear input field
// // });

// // // function to handle withdraw button clicks for checking account
// // document.getElementById('checkingWithdraw').addEventListener('click', function() {
// // const amount = Number(document.getElementById('checkingAmount').value);
// // if (amount >= 0 && amount <= checkingBalance) { // only withdraw positive amount and if enough balance
// // checkingBalance -= amount; // subtract amount from balance
// // // update checking account balance display
// // document.getElementById('checkingBalance').textContent = '$' + checkingBalance;
// // }
// // document.getElementById('checkingAmount').value = ''; // clear input field

// // if (checkingBalance <= 0) { // change background color if balance is zero or negative
// // document.getElementById('checkingBalance').style.backgroundColor = 'red';
// // } else {
// // document.getElementById('checkingBalance').style.backgroundColor = 'gray';
// // }
// // });

// // // function to handle deposit button clicks for savings account
// // document.getElementById('savingsDeposit').addEventListener('click', function() {
// // const amount = Number(document.getElementById('savingsAmount').value);
// // if (amount >= 0) { // only deposit positive amount
// // savingsBalance += amount; // add amount to balance
// // // update savings account balance display
// // document.getElementById('savingsBalance').textContent = '$' + savingsBalance;
// // }
// // document.getElementById('savingsAmount').value = ''; // clear input field
// // });

// // // function to handle withdraw button clicks for savings account
// // document.getElementById('savingsWithdraw').addEventListener('click', function() {
// // const amount = Number(document.getElementById('savingsAmount').value);
// // if (amount >= 0 && amount <= savingsBalance) { // only withdraw positive amount and if enough balance
// // savingsBalance -= amount; // subtract amount from balance
// // // update savings account balance display
// // document.getElementById('savingsBalance').textContent = '$' + savingsBalance;
// // }
// // document.getElementById('savingsAmount').value = ''; // clear input field

// // if (savingsBalance <= 0) { // change background color if balance is zero or negative
// // document.getElementById('savingsBalance').style.backgroundColor = 'red';
// // } else {
// // document.getElementById('savingsBalance').style.backgroundColor = 'gray';
// // }
// // });