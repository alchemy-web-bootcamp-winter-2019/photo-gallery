const test = QUnit.test;

import './html-equal.js';
import makeHtmlTemplate from '../src/make-html-template.js';

QUnit.module('testing gallery outputs');

test('checking if template function outputs html correctly', assert => {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
    const expected = `        
    <li>
      <div id="title">
        <p>${image.title}</p>
      </div>
      <div id="imgage">
        <img src="${image.url}" alt="picture">
      </div>
    </li>`;
    // act
    const result = makeHtmlTemplate(image);
    // assert
    assert.htmlEqual(result, expected);
});