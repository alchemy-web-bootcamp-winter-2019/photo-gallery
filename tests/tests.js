const test = QUnit.test;

//QUnit.module('test suite one');

// function generateHtmlTemplate(expected) {
//     return 
// }

test('make html from template with interpolation', function(assert) {
    //arrange
    const expected = 'UniWhal';
    //act
    const result = `<li>
    <h2>${expected}</h2>
    <img id="UniWhal" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
</li>`;
    //assert
    assert.equal(result, `<li>
    <h2>UniWhal</h2>
    <img id="UniWhal" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
</li>`);
});
