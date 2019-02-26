import './html-equal.js';


const test = QUnit.test;


test('make html from template with interpolation', function(assert) {

    //arrange
    const imageObject = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
    const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>';
    //act
    function createHtmlTemplate(imageObject) {
        const html = `<li><h2>${imageObject.title}</h2><img src="${imageObject.url}"></li>`;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }
    const dom = createHtmlTemplate(imageObject);
  

    //assert
    assert.htmlEqual(dom, expected);
});
