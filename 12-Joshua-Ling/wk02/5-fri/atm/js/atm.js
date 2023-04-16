const balance = {
    checking: 0,
    savings: 0
} 

$(document).ready(function() {

    //Checking Account
    $("#checking-deposit").click(function() {
        const amount = parseInt($("#checking-amount").val());

        deposit(amount, "checking");
    });

    $("#checking-withdraw").click(function() {
        const amount = parseInt($("#checking-amount").val());

        withdraw(amount, "checking", "savings");
    }); 

    //Savings Account
    $("#savings-deposit").click(function() {
        const amount = parseInt($("#savings-amount").val());
        
        deposit(amount, "savings");
    });

    $("#savings-withdraw").click(function() {
        const amount = parseInt($("#savings-amount").val());
        
        withdraw(amount, "savings", "checking");

    }); 
        

});


const display = () => {
    $("#checking-balance").html(`$${balance.checking}`);
    $("#savings-balance").html(`$${balance.savings}`);

    if (balance.checking <= 0) {
        $("#checking-balance").addClass("zero");
    }
    else {
        $("#checking-balance").removeClass("zero");
    }

    if (balance.savings <= 0) {
        $("#savings-balance").addClass("zero");
    }
    else {
        $("#savings-balance").removeClass("zero");
    }
}
        
const withdraw = (amount, mainAcc, bacAcc) => {
    if (!isNaN(amount) )
    {
        if ((balance[mainAcc] - amount) >= 0)
        {
            balance[mainAcc] -= amount;
        }
        else if ((balance[mainAcc] - amount + balance[bacAcc]) >= 0) {
            amount -= balance[mainAcc];
            balance[bacAcc] -= amount;
            balance[mainAcc] = 0;
        }
    }
    display();
}

const deposit = (amount, acc) => {
    if (!isNaN(amount) )
    {
        balance[acc] += amount;
    }
    display();
}



//old code

// $(document).ready(function() {

//     //Checking Account
//     $("#checking-deposit").click(function() {
//         let amount = parseInt($("#checking-amount").val());
//         if (!isNaN(amount) )
//         {
//             checking += amount;
//         }
//         $("#checking-balance").html(`$${checking}`);

//         if (checking > 0) {
//             $("#checking-balance").removeClass("zero");
//         }
//     });

//     $("#checking-withdraw").click(function() {
//         let amount = parseInt($("#checking-amount").val());
//         if (!isNaN(amount) )
//         {
//             if ((checking - amount) >= 0)
//             {
//                 checking -= amount;
//             }
//             else if ((checking - amount + savings) >= 0) {
//                 amount -= checking;
//                 savings -= amount;
//                 checking = 0;
//             }
//         }
//         $("#checking-balance").html(`$${checking}`);
//         $("#savings-balance").html(`$${savings}`);

//         if (checking === 0) {
//             $("#checking-balance").addClass("zero");
//         }

//         if (savings === 0) {
//             $("#savings-balance").addClass("zero");
//         }
//     }); 

//     //Savings Account
//     $("#savings-deposit").click(function() {
//         let amount = parseInt($("#savings-amount").val());
//         if (!isNaN(amount) )
//         {
//             savings += amount;
//         }
//         $("#savings-balance").html(`$${savings}`);

//         if (savings > 0) {
//             $("#savings-balance").removeClass("zero");
//         }
//     });

//     $("#savings-withdraw").click(function() {
//         let amount = parseInt($("#savings-amount").val());
//         if (!isNaN(amount) )
//         {
//             if ((savings - amount) >= 0)
//             {
//                 savings -= amount;
//             }
//             else if ((savings - amount + checking) >= 0) {
//                 amount -= savings;
//                 checking -= amount;
//                 savings = 0;
//             }
//         }
//         $("#savings-balance").html(`$${savings}`);
//         $("#checking-balance").html(`$${checking}`);

//         if (savings === 0) {
//             $("#savings-balance").addClass("zero");
//         }

//         if (checking === 0) {
//             $("#checking-balance").addClass("zero");
//         }

//     }); 
        

// })