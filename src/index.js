import images from '../data/images.js';
import makeImageList from './make-image-list.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeImageList(image);
    imageList.appendChild(dom);
});