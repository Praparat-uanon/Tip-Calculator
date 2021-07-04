const button = document.querySelector(".bmi-btn");

const calBmi = function () {
  let weightValue = document.getElementById("weight").value;
  let heightValue = document.getElementById("height").value;
  let bmiResult = document.getElementById("resultBmi");

  if (heightValue === "" || isNaN(heightValue))
    bmiResult.innerHTML = `Please provide a valid height`;
  else if (weightValue === "" || isNaN(weightValue))
    bmiResult.innerHTML = `Please provide a valid weight`;
  else {
    let bmi = Math.round(weightValue / (heightValue * heightValue));
    if (bmi < 18.6)
      bmiResult.innerHTML = `Your BMI is "${bmi}", so you are UNDERWEIGHT!`;
    else if (bmi >= 18.6 && bmi < 24.9)
      bmiResult.innerHTML = `Your BMI is "${bmi}", so you have a NORMAL WEIGHT!`;
    else bmiResult.innerHTML = `Your BMI is "${bmi}", so you are OVERWEIGHT!`;
  }
  return bmiResult;
};

button.addEventListener("click", calBmi);
