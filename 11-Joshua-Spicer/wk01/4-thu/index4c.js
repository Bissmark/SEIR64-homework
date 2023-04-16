
// The Cash Register

function cashRegister(cart) {
    let total = 0;
    for (let item in cart) {
      total += parseFloat(cart[item]);
    }
    return total;
  }
  
  const cartForParty = {  
    banana: "1.85",
    handkerchief: "1.89",
    Tshirt: "23.22",
    apple: "0.80",
    nalgene: "12.38",
    proteinShake: "12.66"
  };
  
  console.log(cashRegister(cartForParty));
  
  