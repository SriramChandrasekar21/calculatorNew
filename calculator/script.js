function calculator() {
    let num1 = parseFloat(document.getElementById("num1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error (Divide by 0)";
            break;
        default:
            result = "Invalid Operation";
    }
    document.getElementById("result").value = result;
}
