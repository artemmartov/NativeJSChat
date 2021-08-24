import { setTemplate } from "./additional.js";
import chatInit from "./chatInit.js";
import { socket } from "./socket.js";

function createInit() {
  setTemplate("create");

  socket.once("create", chatInit);

  const titleInput = document.querySelector('input[data-input="title"]');
  const passwordInput = document.querySelector('input[data-input="password"]');
  const isPublicInput = document.querySelector('input[data-input="titisPublicle"]');
  const createButton = document.querySelector('button[data-action="create"]');

  createButton.addEventListener('click', () => {
    const title = titleInput.value;
    const password = passwordInput.value;
    const isPublic = isPublicInput.checked;

    socket.emit('create', title, password, isPublic);
  })

}

export default createInit;