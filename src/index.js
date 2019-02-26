import createHtmlTemplate from './make-template.js';
import images from './images.js';
//Java Script to take array of images (imported images) and turm them into gallery images


const galleryUl = document.getElementById('image-gallery');


images.forEach(imageObject=>{
    const liItems = createHtmlTemplate(imageObject);
    galleryUl.appendChild(liItems);
});