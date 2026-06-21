function onClickRound(){
    debugger;
    var number = Number(document.getElementById("txtNumber").value);
    var roundResult = Math.round(number);
    document.getElementById("pRound").innerHTML=roundResult;
}

function onClickCeil(){
    debugger;
      var number = Number(document.getElementById("txtNumber").value);
      var ceilResult = Math.ceil(number);
          document.getElementById("pCeil").innerHTML=ceilResult;
}

function onClickFloor(){
    debugger;
      var number = Number(document.getElementById("txtNumber").value);
      var floorResult = Math.floor(number);
          document.getElementById("pFloor").innerHTML=floorResult;
}