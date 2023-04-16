// The code below was my original code before CJ assisted me by showing me a better solution and helping with the transfer, addaccount and account Info functions.


let acc1 = 0;
let acc2 = 0;
let acc3 = 0;

let bankTotal = {

    acc1: function(deposit, num) {
        if (deposit === 'deposit') {
            acc1 = acc1 + num;
            return 'you deposited $' + num + '\nyour credit account has $' + acc1;
        } else if (deposit === 'withdraw' && (acc1 - num) >= 0) {
            acc1 = acc1 - num;
            return 'you withdrew $' + num + '\nyour credit account has $' + acc1;
        } else {
            return 'I was not able to complete that transaction.\nyour credit account has $' + acc1;
        }
    },

    acc2: function(deposit, num) {
        if (deposit === 'deposit') {
            acc2 = acc2 + num;
            return 'you deposited $' + num + '\nyour savings account has $' + acc2;
        } else if (deposit === 'withdraw' && (acc2 - num) >= 0) {
            acc2 = acc2 - num;
            return 'you withdrew $' + num + '\nyour savings account has $' + acc2;
        } else {
            return 'I was not able to complete that transaction.\nyour savings account has $' + acc2;
        }
    },

    acc3: function(deposit, num) {
        if (deposit === 'deposit') {
            acc3 = acc3 + num;
            return 'you deposited $' + num + '\nyour business account has $' + acc3;
        } else if (deposit === 'withdraw' && (acc3 - num) >= 0) {
            acc3 = acc3 - num;
            return 'you withdrew $' + num + '\nyour business account has $' + acc3;
        } else {
            return 'I was not able to complete that transaction.\nyour business account has $' + acc3;
        }
    },

    total: function() {
        return acc1 + acc2 + acc3;
    },
}

console.log(bankTotal.acc1('deposit', 20));
console.log(bankTotal.acc1('withdraw', 10));
console.log(bankTotal.acc2('deposit', 67));
console.log(bankTotal.acc2('withdraw', 29));
console.log(bankTotal.acc3('deposit', 103));
console.log(bankTotal.acc3('withdraw', 22));
console.log(bankTotal.acc1('', 22));
console.log(bankTotal.total());
console.log(bankTotal.acc1('withdraw', 100));

// CJ's code below so I do not take credit for this beautiful code

// const bank = {
//     accounts: [
//         {
//             name: 'John',
//             balance: 0
//         },
//         {
//             name: 'Jane',
//             balance: 0
//         }
//     ],
//     totalBalance: function () {
//         let sum = 0;
//         for (let i = 0; i < this.accounts.length; i++) {
//             sum += this.accounts[i].balance;
//         }

//         return sum;
//     },
//     addAccount: function (name, balance) {
//         this.accounts.push({
//             name: name,
//             balance: balance
//         });
//     },
//     deposit: function (name, amount) {
//         for (let i = 0; i < this.accounts.length; i++) {
//             if (this.accounts[i].name === name) {
//                 this.accounts[i].balance += amount;
//             }
//         }
//     },
//     withdraw: function (name, amount) {
//         for (let i = 0; i < this.accounts.length; i++) {
//             if (this.accounts[i].name === name) {
//                 this.accounts[i].balance -= amount;
//             }
//         }
//     },
//     transfer: function (from, to, amount) {
//         for (let i = 0; i < this.accounts.length; i++) {
//             if (this.accounts[i].name === from) {
//                 this.accounts[i].balance -= amount;
//             }
//             if (this.accounts[i].name === to) {
//                 this.accounts[i].balance += amount;
//             }
//         }
//     },
//     accountInfo: function (name) {
//         for (let i = 0; i < this.accounts.length; i++) {
//             if (this.accounts[i].name === name) {
//                 return this.accounts[i];
//             }
//         }
//     }
// };