
let bankCheckings = 0;
let bankSavings = 0;

// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM fully loaded and parsed");
//   });




const onClickCheckingDeposit = function(event) {
    // let myName = document.getElementById("checkingBalance").value; 
    // alert("Hi, ");   //testing if alert works 
    console.log(document.getElementById("checking-amount").value);
    const inputValue = parseInt(document.getElementById("checking-amount").value);
    bankCheckings += inputValue;
    console.log(bankCheckings);
    document.getElementById("checking-balance").innerText = `\$${bankCheckings}`;
}

// console.log(document.getElementById("checking-deposit"))
const checkingsDepositButton = document.getElementById("checking-deposit"); 
checkingsDepositButton.addEventListener('click', onClickCheckingDeposit);

// console.log(document.getElementById("checking-balance").innerText);

const onClickCheckingWithdrawal = function(event) {
    // let myName = document.getElementById("checkingBalance").value; 
    // alert("Hi, ");    
    console.log(document.getElementById("checking-amount").value);
    const inputValue = parseInt(document.getElementById("checking-amount").value);
    if (inputValue <= bankCheckings) {
        bankCheckings -= inputValue 
    }     
    console.log(bankCheckings);
    document.getElementById("checking-balance").innerText = `\$${bankCheckings}`;
}


const checkingsWithdrawButton = document.getElementById("checking-withdraw"); 
checkingsWithdrawButton.addEventListener('click', onClickCheckingWithdrawal);




//Repeat above code for savings account

const onClickSavingsDeposit = function(event) {
    console.log(document.getElementById("savings-amount").value);
    const inputValue = parseInt(document.getElementById("savings-amount").value);
    bankSavings += inputValue;
    console.log(bankSavings);
    document.getElementById("savings-balance").innerText = `\$${bankSavings}`;
}

const savingsDepositButton = document.getElementById("savings-deposit"); 
savingsDepositButton.addEventListener('click', onClickSavingsDeposit);


const onClickSavingsWithdrawal = function(event) {  
    console.log(document.getElementById("savings-amount").value);
    const inputValue = parseInt(document.getElementById("savings-amount").value);
    if (inputValue <= bankSavings) {
        bankSavings -= inputValue 
    }     
    console.log(bankSavings);
    document.getElementById("savings-balance").innerText = `\$${bankSavings}`;
}


const savingsWithdrawButton = document.getElementById("savings-withdraw"); 
savingsWithdrawButton.addEventListener('click', onClickSavingsWithdrawal);



