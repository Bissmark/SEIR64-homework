console.log ("hello", jQuery.fn.jquery) 
$(document).ready(function() {

// create 3 arrays  with zero balances
const savings = [0];
const checking = [0];
const total = [0];


function updateDisplays() {
  // calculate savings balance and update display
  const savingsBalance = savings.reduce((total, amount) => total + amount);
  $('#savings-balance').text('$' + savingsBalance.toFixed(2));

  // calculate checking balance and update display
  const checkingBalance = checking.reduce((total, amount) => total + amount);
  $('#checking-balance').text('$' + checkingBalance.toFixed(2));

  // calculate total balance and update display
  const totalBalance = total.reduce((total, amount) => total + amount);
  $('#total-balance').text('$' + totalBalance.toFixed(2));
}

// deposit amount into savings account
$('#savings-deposit').click(function() {
  const amount = parseFloat($('#savings-amount').val());
  savings.push(amount);
  total.push(amount);
  updateDisplays();
});

// withdraw amount from savings account
$('#savings-withdraw').click(function() {
  const amount = parseFloat($('#savings-amount').val());
  const savingsBalance = savings.reduce((total, amount) => total + amount);
  const checkingBalance = checking.reduce((total, amount) => total + amount);
  const totalBalance = savingsBalance + checkingBalance;
  if (amount <= totalBalance - total[total.length-1]) {
    savings.push(-amount);
    total.push(-amount);
    updateDisplays();
  }
});

// deposit amount into checking account
$('#checking-deposit').click(function() {
  const amount = parseFloat($('#checking-amount').val());
  checking.push(amount);
  total.push(amount);
  updateDisplays();
});

// withdraw amount from checking account
$('#checking-withdraw').click(function() {
  const amount = parseFloat($('#checking-amount').val());
  const savingsBalance = savings.reduce((total, amount) => total + amount);
  const checkingBalance = checking.reduce((total, amount) => total + amount);
  const totalBalance = savingsBalance + checkingBalance;
  if (amount <= totalBalance - total[total.length-1]) {
    checking.push(-amount);
    total.push(-amount);
    updateDisplays();
  }
});
  
});

