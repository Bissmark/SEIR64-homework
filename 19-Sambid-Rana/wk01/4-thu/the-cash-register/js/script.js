// The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
// Output
// cashRegister(cartForParty); // 60.55

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};
const grocery = {
    banana: "1.25",
    chicken: "17.99",
    eggs: "12.01",
    apple: "4.60",
    chocolate: "20.34",
    veggies: "22.36"
};

const cashRegister = function (cart) {
    let totalprice = 0;
    for (const value in cart) {
        // const changeToNum = Number(cart[value])
        totalprice = totalprice + Number(cart[value]);
       
        // console.log(changeToNum)
    }
    return totalprice
}

console.log(cashRegister(cartForParty))
console.log(cashRegister(grocery))


