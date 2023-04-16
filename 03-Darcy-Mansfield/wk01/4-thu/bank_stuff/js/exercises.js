

// Cash register

const cartForParty = {
    banana: '1.25',
    handkerchief: '.99',
    tshirt: '25.01',
    apple: '0.60',
    nalgene: '10.34',
    proteinShake: '22.36',
}

const cashRegister = function(cartObj) {
    cartArray = Object.values(cartObj);
    let sum = 0;
    for (i=0; i<cartArray.length; i++) {
        sum += (+cartArray[i]);
    }
    console.log(`The total price is $${sum}`);
}

cashRegister(cartForParty);




// Credit car validation

cc1 = "1111-1111-1111-1111";
cc2 = "2222-2222-2222-2224";

const validateCC = function(ccNumber) {
    ccNumber = ccNumber.slice(0,4)+ ccNumber.slice(5,9)+ ccNumber.slice(10,14) + ccNumber.slice(15);
    if (ccNumber[ccNumber.length - 1] % 2 !== 0) {
        console.log(`Failed. Credit card must not end in an odd number.`);
        return false
    }
    let sum = 0;
    let numTypes = 0;
    for (i=0; i<ccNumber.length; i++) {
        if (ccNumber[i] >= 0 && ccNumber[i] <= 9) {
            sum += +ccNumber[i];
            if (ccNumber[i] !== ccNumber[i-1]) {
                numTypes++;
            }
        } else {
            console.log(`Failed. Credit card has invalid characters.`);
            return false
        }
    }
    if (numTypes < 2) {
        console.log(`Failed. Credit card has only one number.`);
    }
    if (sum < 16) {
        console.log(`Failed. Credit card numbers must add to more than 16.`);
        return false
    } else {
        console.log(`Success. Valid credit card.`)
        return true
    }
}

validateCC(cc1);
validateCC(cc2);
