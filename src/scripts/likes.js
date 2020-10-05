let likesButton = document.querySelector('.likes-button');
let likesNumber = document.querySelector('.likes-number');

likesButton.onclick = function() {
	if (likesButton.classList.contains('added')) {
		likesNumber.textContent--;
	} else {
		likesNumber.textContent++;
	}
	likesButton.classList.toggle('added');
}