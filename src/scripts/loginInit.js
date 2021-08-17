import setTemplate from './setTemplate.js';
import cojInput from './cojInput.js';

function loginInit() {
  setTemplate("login");

  socket.on("signin", cojInput);

  const loginInput = document.querySelector('input[data-input=login]');

  loginInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      socket.emit("signin", loginInput.value);
    }
  })
  socket.emit("signin", "hjhjhvcxz");
}

export default loginInit;