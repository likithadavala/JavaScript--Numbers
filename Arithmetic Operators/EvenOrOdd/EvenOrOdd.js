function onClickEvenOrOdd() {
    debugger;
    var number = Number(document.getElementById("inputNumber").value);
    var result = document.getElementById("pResult");

    if (number % 2 == 0) {
        result.innerText = number + " is Even";
    } else {
        result.innerText = number + " is Odd";
    }
}