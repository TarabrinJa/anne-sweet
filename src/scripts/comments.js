let commentsForm = document.querySelector('.comments-form');
let commentsList = document.querySelector('.comments-list');

let inputName = document.querySelector('.comments-form-name-field');
let inputText = document.querySelector('.comments-form-comment');
let inputEmail = document.querySelector('.comments-form-email-field');

commentsForm.onsubmit = function (evt) {
	evt.preventDefault();

	let newComment = document.createElement('li');
	newComment.classList.add('comments-item');

	let authorName = document.createElement('p');
	authorName.textContent = inputName.value;
	authorName.classList.add('author');

	let commentText = document.createElement('p');
	commentText.textContent = inputText.value;
	commentText.classList.add('comment');

	commentsList.append(newComment);
	newComment.append(authorName);
	newComment.append(commentText);

	inputName.value = '';
	inputText.value = '';
	inputEmail.value = '';
}

