function promise(i) {
	var sec = 300;
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
		setTimeout(resolve, 3000);
	});
}

function mega() {
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
			console.log('Done');
		})
}
mega();
