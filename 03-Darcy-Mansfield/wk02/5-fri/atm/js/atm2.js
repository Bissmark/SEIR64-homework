

$(document).ready(function () {
    console.log('Ready!');

    $('#checking-deposit').on('click', function()  {
        const currentBal = + $('#checking-balance').text().slice(1);
        const depositAmt = + $('#checking-amount').val();
        const newBalance = currentBal + depositAmt;
        $('#checking-balance').text('$' + newBalance);
    })

    $('#checking-withdraw').on('click', function () {
        const currentBal = + $('#checking-balance').text().slice(1);
        const withdrawAmt = + $('#checking-amount').val();
        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBal + otherBalance;
        const newBalance = currentBal - withdrawAmt;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmt <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance));
        }
    })

    $('#savings-deposit').on('click', function()  {
        const currentBal = + $('#savings-balance').text().slice(1);
        const depositAmt = + $('#savings-amount').val();
        const newBalance = currentBal + depositAmt;
        $('#savings-balance').text('$' + newBalance);
    })

    $('#savings-withdraw').on('click', function () {
        const currentBal = + $('#savings-balance').text().slice(1);
        const withdrawAmt = + $('#savings-amount').val();
        const newBalance = currentBal - withdrawAmt;
        const otherBalance = + $('#checking-balance').text().slice(1);
        const totalBalance = currentBal + otherBalance;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmt <= totalBalance) {
            $('#savings-balance').text('$0');
            $('#checking-balance').text('$' + (otherBalance + newBalance));
        }
    })
})