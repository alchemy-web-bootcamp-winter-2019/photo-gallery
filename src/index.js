import makeImageTemplate from './make-image-template.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

images.forEach(function(images) {
    const dom = makeImageTemplate(images);
    imageList.appendChild(dom);
});