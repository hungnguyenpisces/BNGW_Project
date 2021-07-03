function demo1() {
    alert("bạn vừa nhấn nút ư");
}

function demo2() {
    alert("đây là func đưa chuột");
}

function demo3() {
    alert("bạn vừa nhấn đúp chuột");
}

function textInput(e) {
    var v = e.value;
    console.log(v);
}

function changeSelect(e) {
    console.log(e.value);
}

function timer(e) {
    var kcode = event.keyCode;
    if (kcode == 13) {
        var v = e.value;
        if (v >= 1) {
            var min = v;
            var sec = 0;
            var timer = setInterval(function() {
                var min_txt = min >= 10 ? min : "0" + min; // toán tử 3 ngôi
                //   var sec_txt = sec>=10?sec:"0"+sec;
                // tương đương đoạn sau
                if (sec >= 10) {
                    var sec_txt = sec;
                } else {
                    var sec_txt = "0" + sec;
                }

                // console.log(min_txt + ":" + sec_txt);
                var phut = document.getElementById("phut");
                phut.innerText = min_txt;
                var giay = document.getElementById("giay");
                giay.innerText = sec_txt;
                sec--;
                if (sec < 0) {
                    min--;
                    sec = 59;
                }
                if (min < 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
    }
}
var reward = [
    "huy hiệu sắt",
    "xe đạp tí hon",
    "dải rút",
    "xe lăn",
    "dây chun",
    "bi mắt mèo",
    "đô la diêm vương",
    "máy bay giấy",
    "chong chóng",
    "cái nịt",
];

function nhanqua() {
    var sec = 50;
    var timer = setInterval(function() {
        sec--;
        if (sec >= 10) {
            var sec_txt = sec;
        } else {
            var sec_txt = "0" + sec;
        }
        var giay = document.getElementById("giay");
        giay.innerText = sec_txt;
        var random = Math.random() * 10;
        random = parseInt(random);
        var monqua = document.getElementById("monqua");
        monqua.innerText = reward[random];
        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 100);
}