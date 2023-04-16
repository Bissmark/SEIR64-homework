// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.


// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

const accFactory = function ( n , b = 0 ) {
    return {
        name: n,
        balance: b,
        withdraw: function ( num ) {
            if ( num > this.balance ) {
                console.log(`You don't have enough money to withdraw ${ num }. Your balance is ${this.balance}.`)
            } else {
                this.balance -= num;
                console.log(`Your balance is ${this.balance} after withdrawing ${num}.`)
            }
        },
        deposit: function ( num ) {
            this.balance += num;
            console.log(`Your balance is ${this.balance} after depositing ${num}.`)
        }
    }
}

const bank = {
    accounts: [],
    addAcc: function (name, balance) {
        bank.accounts.push(accFactory(name, balance));
    },
    checkSum: function () {
        let sum = 0;
        for ( i = 0; i < bank.accounts.length; i++) {
            sum += bank.accounts[i].balance
        }
        return sum;
    },
    transfer: function ( acc1, acc2, num) {
        // transfer acc1 to acc2 or bank.accounts[0] to bank.accounts[1]
        if ( acc1.balance < num ) {
            console.log(`Not have enough money to transfer`);
        } else {
            acc1.balance -= num;
            acc2.balance += num;
        }
    }
};

bank.addAcc('Tina Turner', 1000);
bank.addAcc('Stevie Wonders', 500);

console.table(bank.accounts);

bank.accounts[0].deposit(100);
bank.accounts[0].withdraw(100);
console.log(bank.checkSum());

const tinaAcc = bank.accounts[0];
const steveAcc = bank.accounts[1];

bank.transfer(tinaAcc, steveAcc, 100)

console.table(bank.accounts);