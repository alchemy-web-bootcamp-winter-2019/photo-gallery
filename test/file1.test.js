
const test = QUnit.test;

QUnit.module('test suite one');

const image = {
    'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    'title': 'UniWhal'

};


function makeGalleryFunction(image) {
    return image;


}

test('create a template function', function(assert) {
    const expected = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal'
    
    };
    
    const result = makeGalleryFunction(image);
    
    assert.equal(expected, result);
});





