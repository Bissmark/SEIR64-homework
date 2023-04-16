const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
const cashRegister = function (cart) {

    let list = Object.keys(cartForParty).length;
    let prices = Object.values(cartForParty);
    let total = 0;

    for (i = 0; i < list; i++) {
        total = total + Number(prices[i]);

    }
    return total;

}

console.log(cashRegister(cartForParty));