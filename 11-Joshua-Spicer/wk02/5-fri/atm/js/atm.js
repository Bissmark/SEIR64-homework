$(document).ready(function () {
    // Set initial balances to $0
    var checkingBalance = 0;
    var savingsBalance = 0;

    // Update balances on the page
    function updateBalances() {
        $('#checking-balance').text('$' + checkingBalance);
        $('#savings-balance').text('$' + savingsBalance);
    }

    // Handle deposit button clicks
    $('#checking-deposit').click(function () {
        var amount = parseFloat($('#checking-amount').val());
        if (!isNaN(amount) && amount > 0) {
            checkingBalance += amount;
            updateBalances();
        }
    });

    $('#savings-deposit').click(function () {
        var amount = parseFloat($('#savings-amount').val());
        if (!isNaN(amount) && amount > 0) {
            savingsBalance += amount;
            updateBalances();
        }
    });

    // Handle withdraw button clicks
    $('#checking-withdraw').click(function () {
        var amount = parseFloat($('#checking-amount').val());
        if (!isNaN(amount) && amount > 0 && amount <= checkingBalance) {
            checkingBalance -= amount;
            updateBalances();
        } else if (!isNaN(amount) && amount > 0 && amount <= (checkingBalance + savingsBalance)) {
            savingsBalance -= (amount - checkingBalance);
            checkingBalance = 0;
            updateBalances();
        }
    });

    $('#savings-withdraw').click(function () {
        var amount = parseFloat($('#savings-amount').val());
        if (!isNaN(amount) && amount > 0 && amount <= savingsBalance) {
            savingsBalance -= amount;
            updateBalances();
        } else if (!isNaN(amount) && amount > 0 && amount <= (checkingBalance + savingsBalance)) {
            checkingBalance -= (amount - savingsBalance);
            savingsBalance = 0;
            updateBalances();
        }
    });

    // Update account colors based on balance
    function updateColors() {
        if (checkingBalance === 0) {
            $('#checking').addClass('zero');
        } else {
            $('#checking').removeClass('zero');
        }
        if (savingsBalance === 0) {
            $('#savings').addClass('zero');
        } else {
            $('#savings').removeClass('zero');
        }
    }
    updateColors();

    // Handle form submission
    $('form').submit(function (event) {
        event.preventDefault();
    });
});
