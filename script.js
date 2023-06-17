document.getElementById("calculate-btn").addEventListener("click", calculateFee);
document.getElementById("reset-btn").addEventListener("click", resetCalculator);

function calculateFee() {
  var amountInput = parseFloat(document.getElementById("amount").value);
  var currencySelect = document.getElementById("currency");
  var feeSpan = document.getElementById("fee");
  var totalSpan = document.getElementById("total");
  var receivedSpan = document.getElementById("received");

  var currency = currencySelect.value;
  var fee = calculatePayPalFee(amountInput);
  var total = amountInput + fee;
  var received = amountInput - fee;

  feeSpan.textContent = formatCurrency(fee, currency);
  totalSpan.textContent = formatCurrency(total, currency);
  receivedSpan.textContent = formatCurrency(received, currency);
}

function calculatePayPalFee(amount) {
  var fee = 0;
  if (amount <= 3000) {
    fee = amount * 0.044 + 0.3;
  } else if (amount <= 10000) {
    fee = amount * 0.039 + 0.3;
  } else if (amount <= 100000) {
    fee = amount * 0.037 + 0.3;
  } else {
    fee = amount * 0.034 + 0.3;
  }
  return fee;
}

function formatCurrency(amount, currency) {
  return currency + " " + amount.toFixed(2);
}

function resetCalculator() {
  document.getElementById("amount").value = "";
  document.getElementById("fee").textContent = "";
  document.getElementById("total").textContent = "";
  document.getElementById("received").textContent = "";
}
