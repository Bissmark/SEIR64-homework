$(document).ready (function(){
// When checking account is zero balance, background goes red
function cZero (){
    if (parseFloat(($('#checking-balance').text()).substring(1)) == 0){
        $('.balance:eq(0)').addClass('zero')
    }
}
// When checking account is no longer zero balance, background goes grey
function cNotZero(){
    if (parseFloat(($('#checking-balance').text()).substring(1)) !== 0){
        $('.balance:eq(0)').removeClass('zero')
    }
}
// When saving account is zero balance, background goes red
function sZero (){
    if (parseFloat(($('#savings-balance').text()).substring(1)) == 0){
        $('.balance:eq(1)').addClass('zero')
    }
}
// When saving account is no longer zero balance, background goes grey
function sNotZero(){
    if (parseFloat(($('#savings-balance').text()).substring(1)) !== 0){
        $('.balance:eq(1)').removeClass('zero')
    }
}

// Function for depositing into checking account
$('#checking-deposit').on('click', function() {
    let initialBalance = parseFloat(($('#checking-balance').text()).substring(1));
    let depositAmount = +$('#checking-amount').val();
    updatedBalance = initialBalance + depositAmount;
    $('#checking-balance').text(`$${updatedBalance}`);
    cNotZero();
    })

// Function for withdrawing from checking account
$('#checking-withdraw').on('click', function() {
    let initialBalanceC = parseFloat(($('#checking-balance').text()).substring(1));
    let initialBalanceS = parseFloat(($('#savings-balance').text()).substring(1));
    let withdrawAmount = +$('#checking-amount').val();
// Check whether money is sufficent in both accounts    
    if(initialBalanceC >= withdrawAmount) {
        updatedBalance = initialBalanceC - withdrawAmount;
        $('#checking-balance').text(`$${updatedBalance}`);
    } else if (withdrawAmount > initialBalanceC + initialBalanceS) {
        alert ('Not Enough Balance')
    } else if (withdrawAmount <= initialBalanceC + initialBalanceS) {
        $('#checking-balance').text(`$0`)
        savingsRemain = initialBalanceS - (withdrawAmount - initialBalanceC)
        $('#savings-balance').text(`$${savingsRemain}`)
    }cZero();sZero()
    })

// Function for depositing into savings account
$('#savings-deposit').on('click', function() {
    let initialBalanceS = parseFloat(($('#savings-balance').text()).substring(1));
    let depositAmount = +$('#savings-amount').val();
    updatedBalance = initialBalanceS + depositAmount;
    $('#savings-balance').text(`$${updatedBalance}`);
    sNotZero();
    })

// Function for withdrawing from savings account    
$('#savings-withdraw').on('click', function() {
    let initialBalanceS = parseFloat(($('#savings-balance').text()).substring(1));
    let initialBalanceC = parseFloat(($('#checking-balance').text()).substring(1));
    let withdrawAmount = +$('#savings-amount').val();
// Check whether money is sufficent in both accounts       
    if(initialBalanceS >= withdrawAmount) {
        updatedBalance = initialBalanceS - withdrawAmount;
        $('#savings-balance').text(`$${updatedBalance}`);
    } else if (withdrawAmount > initialBalanceC + initialBalanceS) {
        alert ('Not Enough Balance')
    } else if (withdrawAmount <= initialBalanceC + initialBalanceS) {
        $('#savings-balance').text(`$0`)
        checkingRemain = initialBalanceC - (withdrawAmount - initialBalanceS)
        $('#checking-balance').text(`$${checkingRemain}`)
    }sZero();cZero()
    })

})

