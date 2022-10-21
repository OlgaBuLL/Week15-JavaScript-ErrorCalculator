function sum() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = +number1 + +number2;
  document.getElementById("result").value = result;
}

function minus() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = number1 - number2;
  document.getElementById("result").value = result;
}

function times() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = number1 * number2;
  document.getElementById("result").value = result;
}

function divide() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  if (number2 == 0) {
    document.getElementById("errorMessage").innerHTML +=
      "Делить на 0 нельзя!<br>";
    return;
  }

  let result = number1 / number2;
  document.getElementById("result").value = result;
}

function clearMe() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result").value = "";
  document.getElementById("errorMessage").innerHTML = "";
}
