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





function promise(i) {
	var sec = 100;
	setInterval(function () {
		sec--;
		if (sec <= 0) {
			return;
		}
		document.getElementById(`mega-result${i}`).innerText = parseInt(
			Math.random() * 45 + 1
		);
	}, 10);
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, 1000);
	});
}

function quayMega() {
	document.getElementById("mega-result").innerHTML = "";
	document.getElementById("mega-result").innerHTML = 
	`
	<span class="bg-success text-white" type="number" id="mega-result1"></span>
	<span class="bg-success text-white" type="number" id="mega-result2"></span>
	<span class="bg-success text-white" type="number" id="mega-result3"></span>
	<span class="bg-success text-white" type="number" id="mega-result4"></span>
	<span class="bg-success text-white" type="number" id="mega-result5"></span>
	<span class="bg-success text-white" type="number" id="mega-result6"></span>
	`;
	promise(1)
		.then(function (data) {
			return promise(2);
		})
		.then(function (data) {
			return promise(3);
		})
		.then(function (data) {
			return promise(4);
		})
		.then(function (data) {
			return promise(5);
		})
		.then(function (data) {
			return promise(6);
		})
		.finally(function () {
			console.log("Done");
		});
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
