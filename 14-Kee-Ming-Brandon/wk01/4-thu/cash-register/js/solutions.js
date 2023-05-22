// Homework: Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cashRegister = ( cart ) => {
    let total = 0;
    const items = Object.keys( cart );
    for ( let i = 0; i < items.length; i++ ) {
        total += Number( cart[ items[ i ] ] );
    };
    return total;
};

// Input
var cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};
  
// Output
console.log( "receipt:", cartForParty );
console.log( `The total price for given receipt is $${ cashRegister(cartForParty) }.` );                // 60.55

