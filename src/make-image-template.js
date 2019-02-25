function makeImageTemplate(image) {
    const template = document.createElement('template');
    const html = /*html*/`
        <li>
            <h3>${image.title}</h3>
            <img src="${image.url}">
        </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export default makeImageTemplate;