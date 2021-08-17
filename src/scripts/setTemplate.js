const app = document.querySelector("div#app");

function setTemplate(pageLabel) {
  const template = document.querySelector(`template[data-page=${pageLabel}]`);

  const segment = document.importNode(template.content, true);
  app.innerHTML = '';
  app.append(segment);
}

export default setTemplate;
