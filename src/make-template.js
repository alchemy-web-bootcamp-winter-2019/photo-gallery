// template function and export it


function createHtmlTemplate(imageObject) {
    const html = `<li><h2>${imageObject.title}</h2><img src="${imageObject.url}"></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default createHtmlTemplate;