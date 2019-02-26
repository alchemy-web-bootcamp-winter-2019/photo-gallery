import './html-equal.js';

const test = QUnit.test;

function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}">
        </li>
    `;
    return template.content;
}


test('makeHtmlTemplate function returns dom node with image and title', assert => {
    const expected = `
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const result = makeHtmlTemplate(image);

    assert.htmlEqual(result, expected);
});