import setTemplate from './setTemplate.js';

function chatInit() {
  setTemplate("chat");
  socket.removeAllListeners("join");
  socket.removeAllListeners("chats");
}

export default chatInit;