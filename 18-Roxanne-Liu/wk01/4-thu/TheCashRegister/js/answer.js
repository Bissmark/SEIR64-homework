
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


function cashRegister(cart) {
    let sum = 0;
    const items = Object.keys(cart); 
    for (i = 0; i < items.length; i++) {
        let itemPrice = parseFloat(cart[items[i]]);
        sum += itemPrice;
    } 
    return sum;
}

// Output
  console.log(`The total price is ${ cashRegister(cartForParty) }.`);
  cashRegister(cartForParty); // 60.55
