//---------------------------------Weight Cal-----------------------------------//

const btn = document.querySelector(".cal-btn");

const calculatWeight = function () {
  const enterNumber = document.getElementById("kilo").value;
  const selectConverter = document.getElementById("select-box").value;
  if (selectConverter === "select")
    return `Enter a valid number or select a converter!`;
  else if (selectConverter === "kgtolb")
    return Number(enterNumber) * 2.205 + " lbs";
  else if (selectConverter === "kgtogr")
    return Number(enterNumber) * 1000 + " grams";
  else if (selectConverter === "lbtokg")
    return Number(enterNumber) / 2.205 + " kgs";
  else if (selectConverter === "grtokg")
    return Number(enterNumber) / 1000 + " kgs";
};
const showResult = function () {
  document.getElementById("show").innerHTML = calculatWeight();
};

btn.addEventListener("click", showResult);
