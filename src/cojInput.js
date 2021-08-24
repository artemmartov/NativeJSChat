import { setTemplate } from "./additional.js";
import createInit from "./createInit.js";
import joinInit from "./joinInit.js";

function cojInput() {
	setTemplate("coj");

	const createButton = document.querySelector('button[data-action="create"]');
	const joinButton = document.querySelector('button[data-action="join"]');

	createButton.addEventListener("click", createInit);
	joinButton.addEventListener("click", joinInit);

	createInit();
}

export default cojInput;
