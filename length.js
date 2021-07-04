//------------------------------Length Cal-----------------------------//
const btnCal = document.querySelector(".submit-length");

//------------------------------CM to Ft----------------------------//
const converter = function () {
  const addNumber = document.getElementById("length").value;
  const selectConverter = document.getElementById("select-length").value;
  if (selectConverter === "select")
    return `Enter a valid number or select converter!`;
  else if (selectConverter === "centimeter") return addNumber / 30.48 + " ft";
  else if (selectConverter === "feet") return addNumber * 30.48 + " cm";
  else if (selectConverter === "mile") return addNumber * 1.609 + " km";
  else if (selectConverter === "kilometer") return addNumber / 1.609 + " miles";
  else if (selectConverter === "meter") return addNumber * 100 + " cm";
  else if (selectConverter === "cmtom") return addNumber / 100 + " meters";
  else if (selectConverter === "inch") return addNumber / 39.37 + " meters";
  else if (selectConverter === "mtoin") return addNumber * 39.37 + " in";
};
const showResult = function () {
  document.getElementById("lengthResult").innerHTML = converter();
};

btnCal.addEventListener("click", showResult);
