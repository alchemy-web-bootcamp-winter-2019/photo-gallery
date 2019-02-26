import makeGalleryFunction from '../src/make-gallery-template.js';

const test = QUnit.test;

QUnit.module('test suite one');


test('make a template that does something', function(assert) {
    const result = makeGalleryFunction ({
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal'
    });


    assert.htmlEqual(result, /*html*/`
        <li>
            <h2>Uniwhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `);
});