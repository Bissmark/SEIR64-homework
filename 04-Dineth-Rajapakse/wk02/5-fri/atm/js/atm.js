//  .on('click)
// .val()
//  .text()
// .addClass()


// function
// strings
// conditionals
// 


$(document).ready(function (){
     
    let checkingBalanceTotal = 0;
    let $checkingBalance = $('#checking-balance');
    $checkingBalance.html(`$${checkingBalanceTotal}.00`);
        
    let savingsBalanceTotal = 0;
    let $savingsBalance = $('#savings-balance');
    $savingsBalance.html(`$${savingsBalanceTotal}.00`);