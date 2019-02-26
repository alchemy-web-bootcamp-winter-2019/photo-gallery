function makeGalleryFunction(image) {
    const html = /*html*/`
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}">
    </li>`;
    
    const template = document.createElement('li');
    template.innerHTML = html;
    return template.content;


}

export default makeGalleryFunction();