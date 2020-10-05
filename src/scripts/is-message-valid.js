let form = document.querySelector('.form');
let textarea = document.querySelector('.textarea');
let submitBtn = document.querySelector('.submit-btn');


submitBtn.onclick = function () {
	let charCounter = textarea.value.length;

	if (charCounter >= 10 && charCounter <= 200) {
		textarea.classList.remove('warning');
		submitBtn.disabled = false;
		}
	else if (charCounter < 10 || charCounter > 200) {
		textarea.classList.add('warning');
		submitBtn.disabled = true;
	}

	textarea.oninput = function () {
		let charCounter = textarea.value.length;

		if (charCounter >= 10 && charCounter <= 200) {
			textarea.classList.remove('warning');
			submitBtn.disabled = false;
			}
		else if (charCounter < 10 || charCounter > 200) {
			textarea.classList.add('warning');
			submitBtn.disabled = true;
		}
	}	
}