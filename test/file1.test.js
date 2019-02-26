const test = QUnit.test;
import makeGalleryFunction from '../src/make-gallery-template.js';
QUnit.module('test suite one');






test('create a template function', function(assert) {
    const images = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal'
    
    };
    
    const result = makeGalleryFunction(images);
    
    const expected = `
    <li><h2>Uniwhal</h2
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">`;
    
    
    
    
    assert.htmlEqual(expected, result);
});





