import { setTemplate } from "./additional.js";
import cojInput from "./cojInput.js";
import { socket } from "./socket.js";
import { ENTER_KEY } from "./additional.js";

function loginInit() {
	setTemplate("login");

	socket.once("signin", cojInput);

	const loginInput = document.querySelector("input[data-input=login]");

	loginInput.addEventListener("keyup", (e) => {
		if (e.key === ENTER_KEY) {
			socket.emit("signin", loginInput.value);
		}
	});
	socket.emit("signin", "hjhjhvcxz");

	// function signinHandler() {
	// 	socket.off("signin", signinHandler);
	// 	cojInput();
	// }
}

export default loginInit;
