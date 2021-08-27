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
			'<span class="bg-primary text-white text-center">' +
			megaNumber[i] +
			"</span>";
		mega.innerHTML += span;
	}
	console.log(mega.value);
	var power = document.getElementById("power-numbers");
	power.innerHTML = "";
	for (var i = 0; i < powerNumber.length; i++) {
		var span =
			'<span class="bg-primary text-white text-center">' +
			powerNumber[i] +
			"</span>";
		power.innerHTML += span;
	}

	//loop lock input
	var inputNumber = document.getElementsByClassName("input-number");
	for (var i = 0; i < inputNumber.length; i++) {
		inputNumber[i].innerHTML = "";
	}
}

function quayMega() {
	var sec = 150;
	var timer = setInterval(function () {
		sec--;
		var random = Math.random() * 45;
		random = parseInt(random);
		if (sec <= 0) {
			clearInterval(timer);
		}
	}, 100);
	return Promise.resolve(random);
}
