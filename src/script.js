import {init} from './scripts/init.js';
window.chats = [];
window.socket = io('//localhost:3000');

init();
