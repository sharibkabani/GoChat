let username = "";
const userColors = {};

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function submitUsername(event) {
	if (event) event.preventDefault();
	username = document.getElementById("username").value.trim();
	if (username) {
		document.getElementById("usernameInput").style.display = "none";
		document.getElementById("chat").style.display = "block";
		startWebSocket();
	} else {
		alert("Please enter a valid username.");
	}
}

function startWebSocket() {
	const messages = document.getElementById("messages");
	const form = document.getElementById("form");
	const input = document.getElementById("input");

	const ws = new WebSocket("ws://localhost:8080/ws/general");

	ws.onmessage = (event) => {
		const message = document.createElement("div");
		const [user, ...msgParts] = event.data.split(": ");
		const msg = msgParts.join(": ");

		if (!userColors[user]) {
			userColors[user] = getRandomColor();
		}

		const userSpan = document.createElement("span");
		userSpan.textContent = user + ": ";
		userSpan.style.color = userColors[user];

		const msgSpan = document.createElement("span");
		msgSpan.textContent = msg;

		message.appendChild(userSpan);
		message.appendChild(msgSpan);
		messages.appendChild(message);
	};

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const message = input.value.trim();
		if (message) {
			ws.send(username + ": " + message);
			input.value = "";
		}
	});
}

// Add event listener for Enter key in the username input field
const usernameInput = document.getElementById("username");
usernameInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		submitUsername(event);
	}
});
