import images from '../data/images.js';
import makeHtmlTemplate from './make-html-template.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeHtmlTemplate(image);
    imageList.appendChild(dom);
});