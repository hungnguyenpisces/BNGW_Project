var megaNumber = [];
var powerNumber = [];

function numInput() {
	//loop input array
	for (var i = 0; i < 6; i++) {
		var v = document.getElementById(`mega-number${i + 1}`).value;
		megaNumber.splice(i, 1, v);
	}
	for (var i = 0; i < 6; i++) {
		var v = document.getElementById(`power-number${i + 1}`).value;
		powerNumber.splice(i, 1, v);
	}
	//loop span array
	var mega = document.getElementById("mega-numbers");
	mega.innerHTML = "";
	for (var i = 0; i < megaNumber.length; i++) {
		var span =
			'<span class="bg-primary text-white">' + megaNumber[i] + "</span>";
		mega.innerHTML += span;
	}
	console.log(mega.value);
	var power = document.getElementById("power-numbers");
	power.innerHTML = "";
	for (var i = 0; i < powerNumber.length; i++) {
		var span =
			'<span class="bg-primary text-white">' + powerNumber[i] + "</span>";
		power.innerHTML += span;
	}

	//loop lock input
	var inputNumber = document.getElementsByClassName("input-number");
	for (var i = 0; i < inputNumber.length; i++) {
		inputNumber[i].innerHTML = "";
	}
}

var megaResult = [];
var powerResult = [];

function resultMega() {
	for (var i = 1; i <= 6; i++) {
		var r = document.getElementById(`mega-result${i}`).value;
		megaResult.splice(i, 1, r);
	}
}

function quayMega() {
	var sec = 150;
	var timer1 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result1");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer1);
		}
	}, 100);
	var timer2 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result2");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer2);
		}
	}, 100);
	var timer3 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result3");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer3);
		}
	}, 100);
	var timer4 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result4");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer4);
		}
	}, 100);
	var timer5 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result5");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer5);
		}
	}, 100);
	var timer6 = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		var mega = document.getElementById("mega-result6");
		mega.innerText = random;
		if (sec <= 0) {
			clearInterval(timer6);
		}
	}, 100);
}

function quayPower() {
	var sec = 150;
	var timer1 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result1");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer1);
		}
	}, 100);
	var timer2 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result2");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer2);
		}
	}, 100);
	var timer3 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result3");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer3);
		}
	}, 100);
	var timer4 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result4");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer4);
		}
	}, 100);
	var timer5 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result5");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer5);
		}
	}, 100);
	var timer6 = setInterval(function () {
		sec--;
		var random = Math.random() * 55;
		random = parseInt(random);
		var power = document.getElementById("power-result6");
		power.innerText = random;
		if (sec <= 0) {
			clearInterval(timer6);
		}
	}, 100);
}
