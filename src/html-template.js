

function createHtmlTemplate(image) {
    return `
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
        </li>
    `;
}


export default createHtmlTemplate;