import './html-equal.js';
import createHtmlTemplate from '../src/make-template.js';


const test = QUnit.test;


test('make html from template with interpolation', function(assert) {

    //arrange
    const imageObject = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
    const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>';
    //act

    const dom = createHtmlTemplate(imageObject);
  

    //assert
    assert.htmlEqual(dom, expected);
});
