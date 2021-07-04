//-------------------------------Tip Calculator Section-------------------------//

const button = document.querySelector(".btn");

const calTip = function () {
  let billValue = document.getElementById("bill").value;
  let tipValue = document.getElementById("tip").value;
  if (billValue === "" && tipValue === "select") return 0;
  else return billValue * tipValue;
};
const totalBill = function () {
  const billValue = document.getElementById("bill").value;
  return Number(billValue) + Number(calTip());
};
const totalForPerson = function () {
  let totalPerson = document.getElementById("people").value;
  if (totalPerson === "") return Number(totalBill());
  else return Number(totalBill()) / Number(totalPerson);
};

function myCalculation() {
  let showResult = document.getElementById("resulttip");
  if (calTip() === 0 && totalBill() === 0)
    return (showResult.innerHTML = `Please enter a valid number or select tip!`);
  else if (isNaN(calTip()))
    return (showResult.innerHTML = `Please enter a valid number or select tip!`);
  else if (totalForPerson() === totalBill())
    return (showResult.innerHTML = `Tip is "${calTip()}" Total bill is "${totalBill()}"`);
  else
    return (showResult.innerHTML = `Tip is "${calTip()}" Total bill is "${totalBill()}" ➡ Total is "${totalForPerson()}" per person.`);
}

button.addEventListener("click", myCalculation);
