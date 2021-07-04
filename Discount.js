// --------------------------Sales and Tax Section-------------------------------//

const mybutton = document.querySelector(".btn-Discount");
const result = document.querySelector(".result-box");
const closeModal = document.querySelector(".close-modal");

const calDiscount = function () {
  const fullPrice = document.getElementById("fullprice").value;
  const discount = document.getElementById("discount").value;

  return Number(fullPrice - (fullPrice * discount) / 100);
};
const calTax = function () {
  const fullPrice = document.getElementById("fullprice").value;
  const tax = document.getElementById("tax").value;

  const taxAmount = Number(fullPrice * (tax / 100));
  if (tax === 0 && tax === undefined) {
    taxAmount = 0;
  }

  return Number(taxAmount) + calDiscount();
};

const showResult = function () {
  removeClass();
  const calResult = document.getElementById("result");

  return (calResult.innerHTML = `Your total is ${calTax()}.`);
};

const removeClass = function () {
  result.classList.remove("hidden");
};

const closeResult = function () {
  result.classList.add("hidden");
};

mybutton.addEventListener("click", showResult);
closeModal.addEventListener("click", closeResult);
