const button = document.querySelector(".btn");

const calTip = function () {
  const billValue = document.getElementById("bill").value;
  const PercentageValue = document.getElementById("percentage").value;

  return (billValue * PercentageValue) / 100;
};

const totalBill = function () {
  const billValue = document.getElementById("bill").value;
  return Number(billValue) + Number(calTip());
};

function myCalculation() {
  document.getElementById(
    "result"
  ).innerHTML = `Tip is "${calTip()}". Total amount is "${totalBill()}".`;
}

button.addEventListener("click", myCalculation);
