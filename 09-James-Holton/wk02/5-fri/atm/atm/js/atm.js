
// whenever a button is pressed (on.(click)) 
// append the input variable to the page and assign its value to a variable to be stored
// create a deposit button that updates the value to the corresponding box and store the remaining money as a value
// create a withdraw button that updates teh value to the corresponding box and store the remaining money as a value
// ensure user can see the change using event listeners
// create an if statement that will check the stored value and if the argument is larger than the depsit amount ignore the function
// create an if statement that will change the background color to red of the box if the balance is $0 and grey if its not
// if amount is more than whats deposited, take money from the other one unless there's not enought
// create overdraft protection for both ways

// $(document).ready(function () {

//     changeBal = function(a, b) {
//         const amount = Number($(b + '-amount').val());
//         const bal = Number($(b + '-balance').text().slice(1));
//         const checkings = Number($('#checking-balance').text().slice(1));
//         const saving = Number($('#savings-balance').text().slice(1));


//         const colorCheck = function () {
//             if (bal + (a * amount) > 0) {
//             $(b).css('background-color', '#6C9A74');
//             } else {
//             $(b).css('background-color', 'red');
//             }
//         }

//         const transfer = function (balance) {
//             $(b + '-balance').html('$' + 0);
//             $(balance + '-balance').html('$' + (Number($(balance + '-balance').text().slice(1)) - (amount - bal)));
//             colorCheck();
//         }

//         if (a < 0 && b === '#checking') {
//             if ((bal + saving) < amount)
//             return null;
//             else if (bal < amount && (bal + saving) >= amount) {
//                 transfer('#savings')
//                 return null;
//             } 
//         } else if (a < 0 && b === '#savings') {
//             if ((bal + checkings) < amount)
//             return null;
//             else if (bal < amount && (bal + checkings) >= amount) {
//                 transfer('#checking')
//                 return null;
//             } 
//         }

//         $(b + '-balance').html('$' + (bal + (a * amount))) 
//         console.log(amount);

//         colorCheck();


        

//     };

// $('#checking-deposit').on('click', function() {changeBal(1, '#checking')});
// $('#checking-withdraw').on('click', function() {changeBal(-1, '#checking')});
// $('#savings-deposit').on('click', function() {changeBal(1, '#savings')});
// $('#savings-withdraw').on('click', function() {changeBal(-1, '#savings')});

// });

$(document).ready(function () {

    changeBalance = function(a, b) { // takes a value 'a' to check whether to deposit, withdraw or transfer // takes value b to check which of the two divs to use

        const amount = Number($(b + '-amount').val()); // the amount that is requested  
        const balance = Number($(b + '-balance').text().slice(1)); // the balace currently in the account
        const checkings = Number($('#checking-balance').text().slice(1)); // the balance in checkings account
        const saving = Number($('#savings-balance').text().slice(1)); // the balance in savings account

        const colorCheck = function (col, num) { // function that checks the balance, changing the color accordingly

            if (balance + (num * amount) > 0) {
            $(col).css('background-color', '#6C9A74');
            } else {
            $(col).css('background-color', 'red');
            }
        }

        const overDraftPro = function (bal) { // function that will withdraw from adjacent

            $(b + '-balance').html('$' + 0);
            $(bal + '-balance').html('$' + (Number($(bal + '-balance').text().slice(1)) - (amount - balance)));
            colorCheck(b, a);
        }

        const transfer = function(first, second, third) { // function that transfers money between acc

            $(first + '-balance').html('$' + (balance - amount));
            $(second + '-balance').html('$' + (third + amount));
        }
        

        if (a < 0 && b === '#checking') {

            if ((balance + saving) < amount) {
                return null;
            }

            if (a === -2) {

                if (balance === 0) {
                    return null;
                }

                transfer('#checking', '#savings', saving);
                colorCheck(b, -1);
                colorCheck('#savings', 1)
                return null;

            } else if (balance < amount && (balance + saving) >= amount) {

                overDraftPro('#savings')

                if (amount - balance === saving) {colorCheck('#savings', a)};
                return null;
            } 

        } else if (a < 0 && b === '#savings') {

            if ((balance + checkings) < amount) {
                return null;
            }

            if (a === -2) {

                if (balance === 0) {
                    return null;
                }

                transfer('#savings', '#checking', checkings)
                colorCheck(b, -1);
                colorCheck('#checking', 1)
                return null;

            } else if (balance < amount && (balance + checkings) >= amount) {

                overDraftPro('#checking')

                if (amount - balance === checkings) {colorCheck('#checking', a)};
                return null;
            } 
        }

        $(b + '-balance').html('$' + (balance + (a * amount))) 
        console.log(amount);

        colorCheck(b, a);

    };

$('#checking-deposit').on('click', function() {changeBalance(1, '#checking')}); // run 

$('#checking-withdraw').on('click', function() {changeBalance(-1, '#checking')});

$('#savings-deposit').on('click', function() {changeBalance(1, '#savings')});

$('#savings-withdraw').on('click', function() {changeBalance(-1, '#savings')});

$('#checking-transfer').on('click', function() {changeBalance(-2, '#checking')});

$('#savings-transfer').on('click', function() {changeBalance(-2, '#savings')});

});