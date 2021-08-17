import setTemplate from './setTemplate.js';
import chatInit from './chatInit.js';


function joinInit() {
  setTemplate("join");

  socket.on("join", chatInit);
  socket.on("chats", listUpdate);


  const chatRoomTemplate = document.querySelector('template[data-segment="chat-room"]');

  const titleInput = document.querySelector('input[data-input="title"]');
  const passwordInput = document.querySelector('input[data-input="password"]');
  const joinButton = document.querySelector('button[data-action="join"]');
  const chatsList = document.querySelector('ul[data-list="chats"]');

  joinButton.addEventListener('click', () => {
    const title = titleInput.value;
    const password = passwordInput.value;

    socket.emit("join", title, password);
  })

  listUpdate();

  function listUpdate() {
    chatsList.innerHTML = '';

    for (const chat of chats) {
      const chatRoom = document.importNode(chatRoomTemplate.content, true);

      const lockSpan = chatRoom.querySelector('span[data-flag="lock"]');
      const counterSpan = chatRoom.querySelector('span[data-flag="counter"]');
      const titleSpan = chatRoom.querySelector('span[data-flag="title"]');

      titleSpan.textContent = chat.title;
      counterSpan.textContent = `(${chat.counter})`;

      if (chat.locked) {
        lockSpan.classList.remove("lock-none");
        lockSpan.classList.add("lock");
      }

      const li = chatRoom.querySelector('li');
      li.addEventListener('click', () => (titleInput.value = chat.title));

      chatsList.append(chatRoom);
    }

  }
}

export default joinInit;
