const test = QUnit.test;

QUnit.module('Creating image template');

function makeImageTemplate(image) {
    const template = document.createElement('template');
    const html = /*html*/`
        <li>
            <h3>${image.title}</h3>
            <img src="${image.url}">
        </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('return dom version of HTML', assert => {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const expected = /*html*/`
        <li>
            <h3>UniWhal</h3>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;
    // act
    const result = makeImageTemplate(image);
    // assert
    assert.htmlEqual(result, expected);
});