$(document).ready(function () {

$('#checking-balance').addClass('active');
$('#savings-balance').addClass('active');

function removeSign(inputAmount) {
    inputAmount = inputAmount.replace("$", "");
    inputAmount = inputAmount.replace(",", "");
    
    return inputAmount;
};

function addDollarsSign(inputAmount) {
    
    return "$" + inputAmount;
};

function processOverdraft(withdrawal, checkingBalance, savingsBalance, account) {

    let totalBalance = checkingBalance + savingsBalance;
    let currentAccountBalance = "";

    if (account === "savings") {
        currentAccountBalance = savingsBalance;
    }

    if (account === "checking") {
        currentAccountBalance = checkingBalance;
    }

    if (withdrawal > currentAccountBalance) {
        let remainingBalance = totalBalance - withdrawal;
        return remainingBalance;
    }
}

$('#checking-deposit').on('click', function () {

    let checkingBalance = removeSign($('#checking-balance').html());
    let inputAmount = removeSign($('#checking-amount').val());

    if (isNaN(checkingBalance) || isNaN(inputAmount)) {
        alert("User error. Please input numbers only.");
    } else {
        checkingBalance = parseFloat(checkingBalance);
        inputAmount = parseFloat(inputAmount);
        checkingBalance = (checkingBalance + inputAmount).toFixed(2);
        $("#checking-balance").html(addDollarsSign(checkingBalance));
        $('#checking-balance').removeClass('active');
    }
}); 


$('#savings-deposit').on('click', function () {

    let savingsBalance = removeSign($('#savings-balance').html());
    let inputAmount = removeSign($('#savings-amount').val());

    if (isNaN(savingsBalance) || isNaN(inputAmount)) {
        alert("User error. Please input numbers only.");
    } else {
        savingsBalance = parseFloat(savingsBalance);
        inputAmount = parseFloat(inputAmount);
        savingsBalance = (savingsBalance + inputAmount).toFixed(2);
        $("#savings-balance").html(addDollarsSign(savingsBalance));
        $('#savings-balance').removeClass('active');
    }
}); 


$('#checking-withdraw').on('click', function () {

    let checkingBalance =  removeSign($('#checking-balance').html());
    let inputAmount =  removeSign($('#checking-amount').val());

    if (isNaN(checkingBalance) || isNaN(inputAmount)) {
        alert("User error. Please input numbers only.");
    } else {
        let savingsBalance = parseFloat(removeSign($('#savings-balance').html()));
        checkingBalance = parseFloat(checkingBalance);
        inputAmount = parseFloat(inputAmount);
        if (inputAmount <= checkingBalance) {
            checkingBalance = (checkingBalance - inputAmount).toFixed(2);
            $("#checking-balance").html(addDollarsSign(checkingBalance));
            if (checkingBalance == 0) {
                $("#checking-balance").addClass("active");
            }
        } else if (inputAmount <= (checkingBalance + savingsBalance)) {
            savingsBalance = processOverdraft(inputAmount, checkingBalance, savingsBalance, "checking");
            $("#checking-balance").html(addDollarsSign("0.00"));
            $("#checking-balance").addClass("active");
            $("#savings-balance").html(addDollarsSign(savingsBalance.toFixed(2)));
            if (savingsBalance == 0) {
                $("#savings-balance").html(addDollarsSign("0.00"));
                $("#savings-balance").addClass("active");
            }
        } else {
            alert("Insufficient account balance");
        }
    }      
}); 


$('#savings-withdraw').on('click', function () {

    let savingsBalance = removeSign($('#savings-balance').html());
    let inputAmount = removeSign($('#savings-amount').val());

    if (isNaN(savingsBalance) || isNaN(inputAmount)) {
        alert("User error. Please input numbers only.");
    } else {
        let checkingBalance = parseFloat(removeSign($('#checking-balance').html()));
        savingsBalance = parseFloat(savingsBalance);
        inputAmount = parseFloat(inputAmount);
        if (inputAmount <= savingsBalance) {
            savingsBalance = (savingsBalance - inputAmount).toFixed(2);
            $("#savings-balance").html(addDollarsSign(savingsBalance));
            if (savingsBalance == 0) {
                $("#savings-balance").addClass("active");
            }
        } else if (inputAmount <= (checkingBalance + savingsBalance)) {
            checkingBalance = processOverdraft(inputAmount, checkingBalance, savingsBalance, "savings");
            $("#savings-balance").html(addDollarsSign("0.00"));
            $("#savings-balance").addClass("active");
            $("#checking-balance").html(addDollarsSign(checkingBalance.toFixed(2)));
            if (checkingBalance == 0){
                $("#checking-balance").html(addDollarsSign("0.00"));
                $("#checking-balance").addClass("active");
            }
        } else {
            alert("Insufficient account balance");
        }
    }   
}); 

});