const test = QUnit.test;

QUnit.module('Create URL Template');

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

function createHtmlTemplate() {
    return `
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;
}

test('Display title & image', function(assert) {
    // arrange
    const expected = `
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;

    // act
    const result = createHtmlTemplate(image);


    // assert
    assert.equal(result, expected);
});
