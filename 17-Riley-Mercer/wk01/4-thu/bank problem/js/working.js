// The Bank Scenario

// I think this does everything that was asked!

const accounts = [
    {AccNumber: 101, name: "RMercer", balance: 10},
    {AccNumber: 202, name: "Sav Mercer-Curnick", balance: 10000}, 
    {AccNumber: 303, name: "Small Business", balance: 300},
    {AccNumber: 404, name: "Raff Mercer", balance: 20},
    {AccNumber: 505, name: "Steve", balance: 500},
    ]

const findIndex = function(accountNumber){
    const index = accounts.findIndex(obj => {
        return obj.AccNumber === accountNumber;
    });
    return index
}

const addBalance = function(accNum,amount){
    index1 = findIndex(accNum);
    accounts[index1].balance = accounts[index1].balance + amount;
    console.log(accounts[index1])
}

const withdrawBalance = function(accNum,amount){
    index1 = findIndex(accNum);
    accounts[index1].balance = accounts[index1].balance - amount;
    console.log(accounts[index1])
}

const checkBalance = function(accNum){
    index = findIndex(accNum);
    let currentBalance = accounts[index].balance
    console.log(currentBalance)
}

const transferBalance = function(accNum1,accNum2,amount){
    index1 = findIndex(accNum1);
    index2 = findIndex(accNum2);
    accounts[index1].balance = accounts[index1].balance - amount;
    accounts[index2].balance = accounts[index2].balance + amount;
    console.log(accounts[index1])
    console.log(accounts[index2])
}

const addAccount = function(accNumber,name,balance){
    const newAcc = {AccNumber: accNumber, name: name, balance: balance};
    accounts.push(newAcc)
    console.table(accounts)
}

