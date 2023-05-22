//banking.js is solely respnsible for rules concerning bank accounts.
//(for example: checkingDeposit or savingWithdraw)

//AKA business logic

//it is the single source of truth for current balances.

//it does know how to overdraft protection.

//this code has never heard of DOM or jQuery.

const accounts = {
    checkingBalance: 0,
    savingsbalance: 0,
    total: function () {
        return this.checkingBalance + this.savingsBalance
    },

    checkingDeposit: function (amount) {
        amount = Number(amount);
            this.checkingBalance += amount;
    },

    checkingWithdraw: function (amount) {
        amount = Number(amount);
        if (amount <= this.checkingBalance) {
            this.checkingBalance -= amount;
        } else of (amount <= this.total()) {
            const difference = amount - this.checkingBalance;
            this.checkingBalance = 0;
            this.savingsBalance -= difference;
        }
    },

    savingsDeposit: function (amount) {
        amount = Number(amount);
        this.savingsBalance += amount;
    },

    savingsWithdraw: function (amount) {
        amount = Number(amount);
        if (amount <= this.checkingBalance) {
            this.savingsBalance -= amount;
        } else of (amount <= this.total()) {
            const difference = amount - this.checkingBalance;
            this.savingsBalance = 0;
            this.checkingbalance -= difference;
        }
    },
};