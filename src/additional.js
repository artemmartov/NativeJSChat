export const ENTER_KEY = "Enter";

const app = document.querySelector("div#app");

export function setTemplate(pageLabel) {
  const template = document.querySelector(`template[data-page=${pageLabel}]`);

  const segment = document.importNode(template.content, true);
  app.innerHTML = '';
  app.append(segment);
}

export const { format } = new Intl.DateTimeFormat('ru-RU', {
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});
