import { setTemplate, format } from "./additional.js";
import { socket, getMessages } from "./socket.js";

const messageTemplate = document.querySelector('template[data-segment="chat-message"]');

function chatInit() {
	setTemplate("chat");

	const contentInput = document.querySelector('input[data-input="content"]');
	contentInput.addEventListener("keyup", (e) => {
		if (e.key === 'Enter') {
			socket.emit('message', contentInput.value);
			contentInput.value = '';
		}
	});


	const sendButton = document.querySelector('button[data-action="send"]');
	sendButton.addEventListener("click", (e) => {
		socket.emit('message', contentInput.value);
		contentInput.value = '';
	 });

	const messagesDiv = document.querySelector('div[data-segment="messages"]')

	for (const message of getMessages()) {
		addMessage(message);
	}

	socket.on("message:add", (message) => addMessage(message));
	socket.on("message:like", (id, counter) => {
		const messageDiv = document.querySelector(`div[data-id="${id}"]`)
		if (messageDiv){
			const likeDiv = messageDiv.querySelector('div[data-flag="like"]');
			if (counter) {
				likeDiv.textContent = counter ;
				likeDiv.classList.remove('chat-rating-empty');
			} else {
				likeDiv.textContent = '';
				likeDiv.classList.add('chat-rating-empty');
			}
		}
	 });
	socket.on("message:dislike", (id, counter) => {
		const messageDiv = document.querySelector(`div[data-id="${id}"]`)
		if (messageDiv){
			const dislikeDiv = messageDiv.querySelector('div[data-flag="dislike"]');
			if (counter) {
				dislikeDiv.textContent = counter ;
				dislikeDiv.classList.remove('chat-rating-empty');
			} else {
				dislikeDiv.textContent = '';
				dislikeDiv.classList.add('chat-rating-empty');
			}
		}
	 });

	function addMessage(message) {
		const messageElement = document.importNode(messageTemplate.content, true);

		const nameDiv = messageElement.querySelector('div[data-flag="name"]');
		const dateDiv = messageElement.querySelector('div[data-flag="date"]');
		const contentDiv = messageElement.querySelector('div[data-flag="content"]');
		const likeDiv = messageElement.querySelector('div[data-flag="like"]');
		const dislikeDiv = messageElement.querySelector('div[data-flag="dislike"]');
		const messageIdDiv = messageElement.querySelector('div[data-id]');

		nameDiv.textContent = message.name;
		contentDiv.textContent = message.content;
		dateDiv.textContent = format(message.date);

		if (message.likes) {
			likeDiv.textContent = message.likes;
			likeDiv.classList.remove('chat-rating-empty');
		} else {
			likeDiv.textContent = '';
			likeDiv.classList.add('chat-rating-empty');
		}

		if (message.dislikes) {
			dislikeDiv.textContent = message.dislikes;
			dislikeDiv.classList.remove('chat-rating-empty');
		} else {
			dislikeDiv.textContent = '';
			dislikeDiv.classList.add('chat-rating-empty');
		}

		likeDiv.addEventListener('click', () => {
			socket.emit('message:like', message.id)
		})

		dislikeDiv.addEventListener('click', () => {
			socket.emit('message:dislike', message.id)
		})

		messageIdDiv.dataset.id = message.id;

		messagesDiv.append(messageElement);
	
	}
}

export default chatInit;
