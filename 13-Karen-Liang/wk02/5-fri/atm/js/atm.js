$(document).ready(function () {

    // ------------------------
    // DEPOSIT INTO CHECKING 
    // ------------------------
    const depositChecking = function () {
        
        // get amount from #checking-amount (input amount)
        let deposit = Number($('#checking-amount').val());
        
        // and parameter for negative numbers
        if (deposit > 0) {

            // get value from #checking-balance and removing $
            let balanceText = ($('#checking-balance').text().replace('$', '')) // 0
            
            // converting to number
            let balanceNum = Number(balanceText)
            
            // adding balance and input amount together
            let newBalance = balanceNum + deposit;
            
            // display new total
            $('#checking-balance').html('$' + newBalance)
            
            // remove class -> deposit === more than 0
             $('#checking-balance').removeClass('zero');

            // make input default back to empty
            $('#checking-amount').val('');

           
        
        } else {

            // if negative or words, alert
            alert('Invalid transaction.');

            // default back to empty
            $('#checking-amount').val('')
        }
    }
    
    $('#checking-deposit').on('click', depositChecking);
    
    // ------------------------
    // DEPOSIT INTO SAVING 
    // ------------------------
    const depositSaving = function () {
        
        // get amount from #checking-amount
        let deposit = Number($('#savings-amount').val());
        
        // valid amount and parameter for negative numbers
        if (deposit > 0) {

            // get value from #checking-balance and removing $
            let balanceText = ($('#savings-balance').text().replace('$', '')) // 0
       
            // converting to number
            let balanceNum = Number(balanceText)
            
            // adding values together
            let newBalance = balanceNum + deposit;
            
            // display new total
            $('#savings-balance').html('$' + newBalance)
            
             // remove class. Deposit always === more than 0;
             $('#savings-balance').removeClass('zero');

            // make depositSaving back to 0 
            $('#savings-amount').val('')
            
        } else {

            // if negative or words, alert
            alert('Invalid transaction.');

            // default back to 0
            $('#savings-amount').val('')
        }

    }
    
    $('#savings-deposit').on('click', depositSaving);

    // ------------------------
    // WITHDRAW FROM CHECKING 
    // ------------------------
    const withdrawChecking = function () {

        // get input value
         let withdrawAmount = Number($('#checking-amount').val());

        // get value of checking balance
        let balanceText =  ($('#checking-balance').text()); //$ 

        // remove $
        let balanceRemove = balanceText.replace('$', ''); 

        // converting to number
        let balanceNum = Number(balanceRemove);

        // --------
        // get SAVINGS balance
        // --------- 

        let savingsText = ($('#savings-balance').text()).replace('$', '');

        // get number
        let savingsNum = Number(savingsText);

        // check both accounts to see if there is enough money to withdrawl
        if (withdrawAmount <= balanceNum + savingsNum) {


            if (withdrawAmount > balanceNum) { // if -0, must take money from other account
                $('#checking-balance').html('$' + '0');
            

                // withdraw from savings
                let newAmount = withdrawAmount - balanceNum;
                let otherAccount = savingsNum - newAmount;

                $('#savings-balance').html('$' + otherAccount)
                
                $('#checking-balance').addClass('zero');

                $('#checking-amount').val('');

                if (savingsNum - newAmount === 0) {
                    $('#savings-balance').addClass('zero');
                }

            } else {

                $('#checking-balance').html('$' + (balanceNum - withdrawAmount));

                if (balanceNum - withdrawAmount === 0) {
                    $('#checking-balance').addClass('zero');
                    $('#checking-amount').val('');
                }

                if (savingsNum - withdrawAmount === 0) {
                    $('#checking-balance').addClass('zero');
                }

            }

        } else {
            // alert
            alert('Invalid transaction.');

            $('#checking-amount').val('');
        }
    }
    $('#checking-withdraw').on('click', withdrawChecking);

    // ------------------------
    // WITHDRAW FROM SAVINGS
    // ------------------------

    const withdrawSavings = function () {

        // get input value
         let withdrawAmount = Number($('#savings-amount').val());

        // get value of checking balance
        let balanceText =  ($('#savings-balance').text()); //$ 

        // remove $
        let balanceRemove = balanceText.replace('$', ''); 

        // converting to number
        let balanceNum = Number(balanceRemove);

        // --------
        // get CHECKING balance
        // --------- 

        let savingsText = ($('#checking-balance').text()).replace('$', '');

        // get number
        let savingsNum = Number(savingsText);

        // check both accounts to see if there is enough money to withdrawl
        if (withdrawAmount <= balanceNum + savingsNum) {


            if (withdrawAmount > balanceNum) { // if -0, must take money from other account
                $('#savings-balance').html('$' + '0') 

                // withdraw from savings
                let newAmount = withdrawAmount - balanceNum;
                let otherAccount = savingsNum - newAmount;

                $('#checking-balance').html('$' + otherAccount)

                $('#savings-balance').addClass('zero');


                $('#savings-amount').val('');

                if (balanceNum - newAmount === 0) {
                    $('#checking-balance').addClass('zero');
                }

                if (savingsNum - withdrawAmount === 0) {
                    $('#checking-balance').addClass('zero');
                }

            } else {

                $('#savings-balance').html('$' + (balanceNum - withdrawAmount));
                if (balanceNum - withdrawAmount === 0) {
                    $('#savings-balance').addClass('zero');
                    $('#savings-amount').val('');
                }
            }

        } else {
            // alert
            alert('Invalid transaction.');

            $('#savings-amount').val('');
        }
    }
    $('#savings-withdraw').on('click', withdrawSavings);

});

  
        // get value of checking balance 
        // get value of saving balance

        // IMPORTANT IF statement. f input value < checking balance + saving balance. 

        // minus values

        // default input value back to 0 

        // ELSE 
        // alert 
        // default back to 0 
    

        // $('#checking-withdraw).on('click', withdraw);
 // --------------
 // get value of checking balance 
        // get value of saving balance

        // IMPORTANT IF statement. f input value < checking balance + saving balance. 

        // minus values

        // default input value back to 0 

        // ELSE 
        // alert 
        // default back to 0 
    

        // $('#checking-withdraw).on('click', withdraw);
// ----------------


// const $button = $('#lib-button'); // a jQuery object

// const makeMadLib = function () {

//     const noun = $('#noun').val();
//     const adjective = $('#adjective').val();
//     const name = $('person').val();

//     const story = `${ name } really likes ${ adjective } ${ noun }`;

//     $('#story').html(story);

// };

//  // RED IF BALANCE  = 0 ----------------
//  const background = function () {
//     let savingBalance = $('savings-balance');
// //  let checkingBalance = $('checking-balance');

//     if (savingBalance <= 0) {
//         $('savings-balance').addClass('.zero')
//     } else {
//         $('savings-balance').removeClass('.zero')
//     } console.log(background);
// } 

