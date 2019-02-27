const test = QUnit.test;

QUnit.module('test suite one');

function generateHtmlTemplate(image) {
    const html = /*html*/ `<li>
    <h2>${image.title}</h2>
    <img src=${image.url}>
</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make html from template with interpolation', function(assert) {
    //arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
    //act
    const result = generateHtmlTemplate(image);
    //assert
    assert.htmlEqual(result, `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`);
});

export default './template.test.js';