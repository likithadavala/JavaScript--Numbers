function onClickTrunc(){
    debugger;
    var number =Number(document.getElementById("txtNumber").value);
    var truncResult = Math.trunc(number);
    document.getElementById("pTrunc").innerHTML = truncResult;
}