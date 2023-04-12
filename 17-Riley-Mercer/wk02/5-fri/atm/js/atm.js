let checkingBal = 0;
let savingsBal = 0;

// const checkingDep = function(depVal){
// const depVal = $('#checking-amount').val();
// checkingBal = checkingBal + depVal;
// console.log(checkingBal)
// }

$('#checking-deposit').on('click', function(){
    const depVal = Number($('#checking-amount').val());
    console.log(depVal)
    checkingBal = checkingBal + depVal;
    $('#checking-balance').html(`$${checkingBal}`);
    checkingBalanceCheck(checkingBal);
});

$('#checking-withdraw').on('click', function(){
    let witVal = Number($('#checking-amount').val());
    if (checkingBal - witVal < 0){
        if (checkingBal + savingsBal > witVal){
            witVal = witVal - checkingBal;
            savingsBal = savingsBal - witVal;
            checkingBal = 0;
            $('#checking-balance').html(`$${checkingBal}`);
            checkingBalanceCheck(checkingBal);
            $('#savings-balance').html(`$${savingsBal}`);
            savingsBalanceCheck(savingsBal);
            alert("Overdraw Activated")
            return
        }
        alert('Error, funds too low')
        return
    } else {
    checkingBal = checkingBal - witVal;
    // withdrawal check(checkingBal, witVal)
    $('#checking-balance').html(`$${checkingBal}`);
    checkingBalanceCheck(checkingBal);
}});

$('#savings-deposit').on('click', function(){
    const depVal = Number($('#savings-amount').val());
    console.log(depVal)
    savingsBal = savingsBal + depVal;
    $('#savings-balance').html(`$${savingsBal}`);
    savingsBalanceCheck(savingsBal);
});

$('#savings-withdraw').on('click', function(){
    let witVal = Number($('#savings-amount').val());
    if (savingsBal - witVal < 0){
        if (savingsBal + checkingBal > witVal){
            witVal = witVal - savingsBal;
            checkingBal = checkingBal - witVal;
            savingsBal = 0;
            $('#checking-balance').html(`$${checkingBal}`);
            checkingBalanceCheck(checkingBal);
            $('#savings-balance').html(`$${savingsBal}`);
            savingsBalanceCheck(savingsBal);
            alert("Overdraw Activated")
            return
        }
        alert('Error, funds too low')
        return
    } else {
    savingsBal = savingsBal - witVal;
    $('#savings-balance').html(`$${savingsBal}`);
    savingsBalanceCheck(savingsBal);
}});

const checkingBalanceCheck = function(checkingBal){
    if (checkingBal === 0){
        $('#checking-balance').addClass('zero')
        console.log("Checking-Bal == Zero")
    } else $('#checking-balance').removeClass('zero')
};

const savingsBalanceCheck = function(savingsBal){
    if (savingsBal === 0){
        $('#savings-balance').addClass('zero')
        console.log("savings-Bal == Zero")
    } else $('#savings-balance').removeClass('zero')
};

checkingBalanceCheck(checkingBal);
savingsBalanceCheck(savingsBal);