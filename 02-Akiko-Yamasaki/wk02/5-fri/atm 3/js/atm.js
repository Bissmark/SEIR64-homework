//* Keep track of the checking and savings balances somewhere
//.
//* Add functionality so that a user can withdraw money from one of the bank accounts.
//* Make sure you are updating the display and manipulating the HTML of the page
//so a user can see the change.
//* Make sure the balance in an account can't go negative. If a user tries to
//withdraw more money than exists in the account, ignore the transaction.
//* When the balance of the bank account is $0 the background of that bank account
//should be red. It should be gray when there is money in the account.
//* What happens when the user wants to withdraw more money from the checking
//account than is in the account? These accounts have overdraft protection, so if
//a withdrawal can be covered by the balances in both accounts, take the checking
//balance down to $0 and take the rest of the withdrawal from the savings account.
//If the withdrawal amount is more than the combined account balance, ignore it.
//* Make sure there is overdraft protection going both ways


//* Add functionality so that a user can deposit money into one of the bank accounts.
//* Make sure you are updating the display and manipulating the HTML of the page
//so a user can see the change --> 
//add funtion take the value of the variable(#checking-amount)
//variable let total (#checking-balance)=0;
//total += checking-amount value;

$(document).ready(function(){

    
//     const checkBalance = document.querySelector("#checking-balance");
//     // //source of truth, state
//     let total = 0;
//     const depositBtn = document.querySelector('#checking-deposit');
//       const addCheck = function () {
//     // //   let currentTotal = 0;
//         const depositAmt = Number(
//         document.querySelector("#checking-amount").value);
//         console.log("dep amt", depositAmt);
//         const checkBalance = document.querySelector("#checking-balance");
//         console.log("balance" + checkBalance.innerHTML);
//     // //   currentTotal = Number(checkBalance.innerHTML.replace("$", ""));
//         total += depositAmt;
//     //   console.log(total);
//         checkBalance.innerHTML = total;
// };
// depositBtn.addEventListener("click", addCheck);

// addCheck();

// const withdrawBtn = document.querySelector('#checking-withdraw');
// const withdrawCheck = function (){
//     const withdrawAmt = Number(document.querySelector('#checking-amount').value);
//     const checkBalance = document.querySelector("#checking-balance");
//     total -= withdrawAmt;
//     checkBalance.innerHTML = total;
// };
// withdrawBtn.addEventListener("click", withdrawCheck);



//variable for depositAmt, bottons, balance
//set depositamt text to be ''so it refreshes after depo button is usedd
//set the initial sum to be 0 and add checkAmt as it is added
//renew balance everytime deposit is made

let total = 0;
const $depositBtn = $('#checking-deposit');
const addCheck = function(){ 
    let $depositAmt = $('#checking-amount').val(); 
    const checkAmt = parseInt($depositAmt);
    let $checkBalance = $('#checking-balance');
    total += checkAmt;
        console.log("total is " + total);
    $checkBalance.html(total);
    
};
$depositBtn.on('click', addCheck);
// addCheck();

const $withdrawBtn = $('#checking-withdraw');
const withdrawCheck = function(){
    let $withdraw = $('#checking-amount').val(); 
    const withdrawkAmt = parseInt($withdraw);
    let $checkBalance = $('#checking-balance');
    total -= withdrawkAmt;
    $checkBalance.html(total);
};
$withdrawBtn.on('click', withdrawCheck);

const $savDepBtn = $('#savings-deposit');
let savingTotal = 0;
const savingAdd = function (){
    const $savingDep = $('#savings-amount').val();
    const savingDep = parseInt($savingDep);
    console.log(savingDep);
    let $savBalance = $('#savings-balance');
    savingTotal += savingDep;
    console.log(savingTotal);
    $savBalance.html(savingTotal);

}
$savDepBtn.on('click', savingAdd);
// savingAdd();
});
