import images from '../data/images.js';
import createHtmlTemplate from '../src/html-template.js';
const imageContainer = document.getElementById('image-container'); 

images.forEach((image) => {
    const template = document.createElement('template');
    template.innerHTML = createHtmlTemplate(image);
    const dom = template.content;
    imageContainer.appendChild(dom);
});