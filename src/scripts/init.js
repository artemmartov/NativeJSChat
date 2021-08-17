import loginInit from './loginInit.js';

export function init() {
  socket.on("error", (message) => alert(message));
  socket.on("chats", (xs) => chats = xs);

  loginInit();
}