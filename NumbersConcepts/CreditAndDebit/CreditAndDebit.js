// var totalCredited = 0;
// var totalDebited = 0;
// function onClickCredit() {
//     debugger;
//     var amount = Number(document.getElementById("txtAmount").value);
//     totalCredited += amount;  // Add amount to total credit
//     var currentBalance = totalCredited - totalDebited;
//     document.getElementById("pCreditResult").innerHTML = "Balance: $" + currentBalance;
//     document.getElementById("pMassage").innerHTML = "";
// }

// function onClickDebit() {
//     debugger;
//     var amount = Number(document.getElementById("txtAmount").value);
//     var currentBalance = totalCredited - totalDebited;
//     if (amount > currentBalance) {
//         document.getElementById("pMassage").innerHTML = "<span style='color : red;'>Insufficient backbalance! You only have $" + currentBalance + ".<span>";
//     } else {
//         totalDebited += amount;
//         var nerBalance = totalCredited - totalDebited;
//         document.getElementById("pDebitResult").innerHTML = "Balance: $" + newBalance;
//         document.getElementById("pMassage").innerHTML = "<span style='color : green;'>Debited Sucessful<span>";
//     }
// }

balance =0;
function onClickCredit(){
    debugger;
    var credit=Number(document.getElementById("txtAmount").value);
    balance =balance + credit;
    document.getElementById("pCreditResult").innerHTML= credit +"credited .Available balance:"+balance;
}
function onClickDebit(){
    debugger;
    var debit =Number(document.getElementById("txtAmount").value);
    balance =balance-debit;
    document.getElementById("pDebitResult").innerHTML = debit +"bebited . Availble balance:" +balance;
}