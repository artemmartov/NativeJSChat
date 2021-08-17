import setTemplate from './setTemplate.js';
import createInit from './createInit.js';
import joinInit from './joinInit.js';

function cojInput() {
  setTemplate("coj");
  socket.removeAllListeners("signin");
  const createButton = document.querySelector('button[data-action="create"]');
  const joinButton = document.querySelector('button[data-action="join"]');

  createButton.addEventListener("click", createInit);
  joinButton.addEventListener("click", joinInit);

  joinInit();
}

export default cojInput;
