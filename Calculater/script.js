function calculate(op) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = document.getElementById("result");

  if (isNaN(n1) || isNaN(n2)) {
    result.textContent = "⚠️ Please enter valid numbers!";
    return;
  }

  let ans;
  switch(op) {
    case '+': ans = n1 + n2; break;
    case '-': ans = n1 - n2; break;
    case '*': ans = n1 * n2; break;
    case '/': ans = n2 !== 0 ? n1 / n2 : "Infinity"; break;
  }
  result.textContent = "Result: " + ans;
}
