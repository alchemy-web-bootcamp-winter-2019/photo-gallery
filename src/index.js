import makeImageTemplate from './image-template.js';
import images from '../data/images.js';

const imageGallery = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageGallery.appendChild(dom);
});
