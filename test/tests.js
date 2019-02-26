import './html-equal.js';
import makeImageTemplate from '../src/make-image-template.js';
const test = QUnit.test;


test('template literal will appear same as static html', function(assert) {
    //arrange
    const image = {
        title: 'cityscape',
        url: 'https://c2.staticflickr.com/4/3195/2894076620_42869680eb_o.jpg'
    }
    ;

    //act

    //i need a function
    const dom = makeImageTemplate(image);
    //assert
    assert.htmlEqual(dom, `
    <li>
    <h2>cityscape</h2>
    <img src="https://c2.staticflickr.com/4/3195/2894076620_42869680eb_o.jpg">
    </li>
    `);
    
});

// create a test that shows one iteration of the function working.