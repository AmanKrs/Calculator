let elem = document.getElementsByClassName("btnInput");
var myinput;

for (var i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", function () {
    clickValue = this.value; // 'this' refers to the clicked element
    if (clickValue) {
      var x = document.createTextNode(clickValue);
      // console.log(x);
      if (clickValue == "AC") {
        document.getElementById("inputval").innerHTML = "";
      } else if (clickValue == "DEL") {
        let editvalue = document.getElementById("inputval").innerHTML;
        // console.log(editvalue.length);
        for (let i = 0; i < editvalue.length; i++) {
          var editedValue = editvalue.toString().slice(0, -1);
          document.getElementById("inputval").innerHTML = editedValue;
        }
      } else {
        if (clickValue == "=") {
        } else {
          document.getElementById("inputval").appendChild(x);
        }
      }
    }

    if (clickValue == "=") {
      var valuetocal = document.getElementById("inputval").innerHTML;
      cal(valuetocal);
    }
  });
}

function cal(valuecal) {
  try {
    finalResult = eval(valuecal);
    console.log(finalResult);
    document.getElementById("inputval").innerHTML = finalResult;
  } catch (error) {
    alert("Invalid Operation");
    document.getElementById("inputval").innerHTML = "";
  }
}
