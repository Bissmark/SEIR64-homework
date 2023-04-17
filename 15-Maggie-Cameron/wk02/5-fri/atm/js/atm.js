$(document).ready(function () {
    
    $('#checking-deposit').on('click', addMoney); 
    $('#savings-deposit').on('click', addMoney);

function addMoney () {
    const prevBalance = $(this).siblings('div.balance');
    // console.log(prevBalance);CANNOT GET ABOVE TO WORK USING CLASS? :(
    const result = prevBalance.text();
    // console.log(result);
    const currentBalance = parseInt(result.replace('$', ''));
    const newEntry = parseInt($(this).siblings('input."checking-balance"').val())
    // console.log(newEntry);
    $(prevBalance).text( function(){
        const total = newEntry + currentBalance;
        return '$' + total
    });
    $("#checking-amount").val('');
    $("#savings-amount").val('');
}

$('#checking-withdraw').on('click', subtractMoney); 
$('#savings-withdraw').on('click', subtractMoney); 
function subtractMoney () {
    const prevBalance = $(this).siblings('div.balance');
    // console.log(prevBalance);
    const result = prevBalance.text();
    // console.log(result);
    const currentBalance = parseInt(result.replace('$', ''));
    const newEntry = parseInt($(this).siblings('input."checking-balance"').val())
    // console.log(newEntry);
    $(prevBalance).text( function(){
        const total = currentBalance - newEntry;
           if (total >= 0) {
            return '$' + total 
            } else {
                return
            }
    });
    $("#checking-amount").val('');
    $("#savings-amount").val('');
}})

//IF ACCOUNTS === 0 MAKE BACKGROUND RED




    



// // $(document).ready(function () {
// //     $('#checking-deposit').on('click', function () {
// //         const checkingAmount = $(this).val();
// //         $('#checking-balance.balance').html(checkingAmount);
// //     })}); 
// //DISPLAYS THE WORD DEPOSIT ON SCREEN AFTER DEPOSIT CLICKED


// // $(document).ready(function () {
// //     $('#checking-amount').on('click', function () {
// //         const checkingAmount = $(this).val();
// //         $('#checking-balance.balance').html(checkingAmount);
// //     })}); 
// //DISPLAYS WHITE BAR CONTENTS ON SCREEN AFTER WHITE BAR CLICKED 

// $(document).ready(function () {
//     $('#checking-deposit').on('click', function () {
//         const checkingAmount = $('#checking-amount').val();
//         $('#checking-balance.balance').html(checkingAmount);
//         {
//         const checkingBalance = (checkingAmount + $('#checking-amount').val());
//         $('#checking-balance.balance').html(checkingBalance);
//         }
//     })}); //MAKES THE TWO VALUES ADD ONTO EACH

//     //     $('#toggle').on('click', function () {
// //         $('img').fadeToggle(800);




// // $(document).ready(function () {
// //     $('#checking-deposit').on('click', function () {
// //         const checkingAmount = $(this).val();
// //         $('#checking-amount.balance').html(checkingAmount);
// //         })});

//     // $(document).ready(function () {
//     //     $('#checking-amount').on('click', function () {
//     //         const checkingAmount = $(this).val();
//     //         $('#checking-balance.balance').html(checkingAmount);
//     //     })});
    


// // $(document).ready(function () {
// //     $('#name').on('keyup', function () {
// //         const name = $(this).val();
// //         $('header h1').html('Welcome ' + name);
// //     }).on('focus', function () {
// //         $('header').addClass('active');
// //     }).on('blur', function () {
// //         $('header').removeClass('active');
// //     });

// //     $('#toggle').on('click', function () {
// //         $('img').fadeToggle(800);
// //     });
// });