


/*

Add functionality to the buttons
- deposit button will add text to the savings-balance or chequeing balance
- withdrawal will take away money.
- check first whether withdrawal is greater than cheque and saving combined
- if withdrawal too large for first account, use function to remove money from other account
- if the amount is 0, change background to red by using the class in css

*/
$(document).ready(function() {

    const chqBalance = parseFloat($('#checking-balance').text().replace('$', ''));
    const savBalance = parseFloat($('#savings-balance').text().replace('$', ''));

    const checkZero = function(amount) {
        if (amount <= 0) {
            $('#checking-balance').attr('class', 'zero');
        } else {
            $('#checking-balance').attr('class', 'balance');
        }
    }

    const savZero = function(amount) {
        if (amount <= 0) {
            $('#savings-balance').attr('class', 'zero');
        } else {
            $('#savings-balance').attr('class', 'balance');
        }
    }

    checkZero(chqBalance);
    savZero(savBalance);

    const totalAmount = function(amount) {

        const chqBalance = parseFloat($('#checking-balance').text().replace('$', ''));
        const savBalance = parseFloat($('#savings-balance').text().replace('$', ''));

        if (amount > (chqBalance + savBalance)) {
            alert('You do not have enough money in both accounts for that transaction.');
            return true
        }
    }

    const ifNumber = function (amount) {
        if ($.isNumeric(amount) == false) {
            alert('Please enter a valid amount.');
            return true
        } 
    }

    $('#checking-deposit').click(function() {
        const chqAmount = parseFloat($('#checking-amount').val());
        
        if (ifNumber($('#checking-amount').val())) {
            return
        };
        
        const chqBalance = parseFloat($('#checking-balance').text().replace('$', ''));
        const amount = Math.round(100 * (chqAmount + chqBalance)) / 100;
        $('#checking-balance').text(`\$${amount}`);
        checkZero(amount);
    })

    $('#checking-withdraw').click(function() {
        const chqAmount = parseFloat($('#checking-amount').val());

        if (ifNumber($('#checking-amount').val())) {
            return
        };
        
        if (totalAmount(chqAmount)) {
            return
        };

        const chqBalance = parseFloat($('#checking-balance').text().replace('$', ''));
        let amount = Math.round(100 * (chqBalance - chqAmount)) / 100;

        if (amount <= 0) {
            const savBalance = parseFloat($('#savings-balance').text().replace('$', ''));
            const savAmount = Math.round(100 * (savBalance + amount)) / 100;
            $('#savings-balance').text(`\$${savAmount}`);
            amount = 0;
        }

        $('#checking-balance').text(`\$${amount}`);
        checkZero(amount);
    })

    $('#savings-deposit').click(function() {
        const savAmount = parseFloat($('#savings-amount').val());
        
        if (ifNumber($('#savings-amount').val())) {
            return
        };
        
        const savBalance = parseFloat($('#savings-balance').text().replace('$', ''));
        const amount = Math.round(100 * (savAmount + savBalance)) / 100;
        $('#savings-balance').text(`\$${amount}`);
        savZero(amount);
    })

    $('#savings-withdraw').click(function() {
        const savAmount = parseFloat($('#savings-amount').val());

        if (ifNumber($('#savings-amount').val())) {
            return
        };
        
        if (totalAmount(savAmount)) {
            return
        };

        const savBalance = parseFloat($('#savings-balance').text().replace('$', ''));
        let amount = Math.round(100 * (savBalance - savAmount)) / 100;

        if (amount <= 0) {
            const chqBalance = parseFloat($('#checking-balance').text().replace('$', ''));
            const chqAmount = Math.round(100 * (chqBalance + amount)) / 100;
            $('#checking-balance').text(`\$${chqAmount}`);
            amount = 0;
        }

        $('#savings-balance').text(`\$${amount}`);
        savZero(amount);
    })

})


// const withdraw = function (chequeTotal, savingsTotal, withdrawal) {

//     if (withdrawal > chequeTotal) {

//         savingsTotal += chequeTotal - withdrawal;
//         chequeTotal = 0;

//     }

//     console.log(chequeTotal);
//     console.log(savingsTotal);

// }

// withdraw(400, 200, 500);