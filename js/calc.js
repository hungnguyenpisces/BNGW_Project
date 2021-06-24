function bmiCalc() {
    document.getElementById("bmi-calc").style.display = "block";
    document.getElementById("ibw-calc").style.display = "none";
    document.getElementById("dci-calc").style.display = "none";
    document.getElementById("cb-calc").style.display = "none";

    var calcBmi = document.getElementById("calc-bmi");
    calcBmi.style.color = "#000000";
    calcBmi.style.backgroundColor = "#eeeeee";
    calcBmi.style.border = "1px solid #eeeeee";
    calcBmi.style.fontWeight = 700;
    var calcIbw = document.getElementById("calc-ibw");
    calcIbw.style = "none";
    var calcDci = document.getElementById("calc-dci");
    calcDci.style = "none";
    var calcCb = document.getElementById("calc-cb");
    calcCb.style = "none";
}

function ibwCalc() {
    document.getElementById("bmi-calc").style.display = "none";
    document.getElementById("ibw-calc").style.display = "block";
    document.getElementById("dci-calc").style.display = "none";
    document.getElementById("cb-calc").style.display = "none";

    var calcBmi = document.getElementById("calc-bmi");
    calcBmi.style = "none";
    var calcIbw = document.getElementById("calc-ibw");
    calcIbw.style.color = "#000000";
    calcIbw.style.backgroundColor = "#eeeeee";
    calcIbw.style.border = "1px solid #eeeeee";
    calcIbw.style.fontWeight = 700;
    var calcDci = document.getElementById("calc-dci");
    calcDci.style = "none";
    var calcCb = document.getElementById("calc-cb");
    calcCb.style = "none";
}

function dciCalc() {
    document.getElementById("bmi-calc").style.display = "none";
    document.getElementById("ibw-calc").style.display = "none";
    document.getElementById("dci-calc").style.display = "block";
    document.getElementById("cb-calc").style.display = "none";

    var calcBmi = document.getElementById("calc-bmi");
    calcBmi.style = "none";
    var calcIbw = document.getElementById("calc-ibw");
    calcIbw.style = "none";
    var calcDci = document.getElementById("calc-dci");
    calcDci.style.color = "#000000";
    calcDci.style.backgroundColor = "#eeeeee";
    calcDci.style.border = "1px solid #eeeeee";
    calcDci.style.fontWeight = 700;
    var calcCb = document.getElementById("calc-cb");
    calcCb.style = "none";
}
function cbCalc() {
    document.getElementById("bmi-calc").style.display = "none";
    document.getElementById("ibw-calc").style.display = "none";
    document.getElementById("dci-calc").style.display = "none";
    document.getElementById("cb-calc").style.display = "block";

    var calcBmi = document.getElementById("calc-bmi");
    calcBmi.style = "none";
    var calcIbw = document.getElementById("calc-ibw");
    calcIbw.style = "none";
    var calcDci = document.getElementById("calc-dci");
    calcDci.style = "none";
    var calcCb = document.getElementById("calc-cb");
    calcCb.style.color = "#000000";
    calcCb.style.backgroundColor = "#eeeeee";
    calcCb.style.border = "1px solid #eeeeee";
    calcCb.style.fontWeight = 700;
}
