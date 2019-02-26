function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li class='${image.keyword}'>
            <h2>${image.title}</h2>
            <img src="${image.url}">
        </li>
    `;
    return template.content;
}

export default makeHtmlTemplate;