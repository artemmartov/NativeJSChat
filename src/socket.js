export const socket = io("//localhost:3000");

let chats = [];
export const getChats = () => chats;

let messages = [];
export const getMessages = () => messages;

socket.once("error", (message) => alert(message));
socket.once("chats", (xs) => (chats = xs));
socket.once("messages", (xs) => (messages = xs));





