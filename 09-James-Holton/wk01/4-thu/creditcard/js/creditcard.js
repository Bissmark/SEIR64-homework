const validateCreditCard = function (card) {

    const notVal = 'your card is not valid';
   
    if (card.length === 16) {
        const newcard = card.split('', 16);
        const allEqual = card => card.every(val => val === card[0]);
        let numEqual = allEqual(newcard);

        if (numEqual === false) {

            if (card[15] % 2 === 0) {
                let numCom = 0;

                for (j = 0; j <= card.length; j++) {
                    numCom = numCom + Number(newcard[j]);

                    if (numCom > 16) {
                        return `your card ${ card } is valid`;
                    } 
                    
                } return notVal + ': does not >= 16';

            } else {
                return notVal + ': does not end in an even number';

            }
        } else {
            return notVal + ': all numbers are equal';

        }
    } else {
        return notVal + 'card is not 16 digits long';

    }
};

console.log(validateCreditCard('9999999988880000'));
console.log(validateCreditCard('6666666666661666'));
console.log(validateCreditCard('a92332119c011112'));
console.log(validateCreditCard('4444444444444444'));
console.log(validateCreditCard('1111111111111110'));
console.log(validateCreditCard('6666666666666661'));