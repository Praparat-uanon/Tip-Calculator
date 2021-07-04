//---------------------------------Temperature Cal-------------------------------//
const submitCel = document.querySelector(".submit-cel");

const converter = function () {
  const addNumber = document.getElementById("number").value;
  const selectConverter = document.getElementById("select").value;
  if (selectConverter === "select")
    return `Enter a valid number or select a converter!`;
  else if (selectConverter === "celsius")
    return Number(addNumber) * (9 / 5) + 32 + " °F";
  else if (selectConverter === "cctok")
    return Number(addNumber) + 273.15 + " K";
  else if (selectConverter === "cctora")
    return Number(addNumber) * (9 / 5) + 491.67 + " °Ra";
  else if (selectConverter === "fahtocc")
    return (Number(addNumber) - 32) * (5 / 9) + " °C";
  else if (selectConverter === "fahtok")
    return (Number(addNumber) - 32) * (5 / 9) + Number(273.15) + " K";
  else if (selectConverter === "fahtora")
    return Number(addNumber) + Number(459.67) + " °Ra";
  else if (selectConverter === "keltocc")
    return Number(addNumber) - 273.15 + " °C";
  else if (selectConverter === "keltofah")
    return (Number(addNumber) - 273.15) * (9 / 5) + Number(32) + " °F";
  else if (selectConverter === "keltora") return addNumber * 1.8 + " °Ra";
  else if (selectConverter === "ratocc")
    return (Number(addNumber) - 491.67) * (5 / 9) + " °C";
  else if (selectConverter === "ratofah")
    return Number(addNumber) - 459.67 + " °F";
  else if (selectConverter === "ratokel")
    return Number(addNumber) * (5 / 9) + " K";
};

const showResult = function () {
  document.getElementById("cel").innerHTML = converter();
};

submitCel.addEventListener("click", showResult);
