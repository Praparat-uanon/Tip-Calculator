const button = document.querySelector(".btn");

const calTip = function () {
  const billValue = document.getElementById("bill").value;
  const PercentageValue = document.getElementById("percentage").value;

  return (billValue * PercentageValue) / 100;
};

function myCalculation() {
  document.getElementById("result").innerHTML = "Your tip is " + calTip();
}

button.addEventListener("click", myCalculation);
