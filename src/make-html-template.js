function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `        
    <li>
    <div id="title">
    <p>${image.title}</p>
    </div>
    <div id="imgage">
      <img src="${image.url}" alt="picture">
    </div>
  </li>`;

    return template.content;
}

export default makeHtmlTemplate;