const test = QUnit.test;

QUnit.module('Creating image template');

function makeImageTemplate() {
    return `
        <li>
            <h3>UniWhal</h3>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;
}

test('return dom version of HTML', assert => {
    // arrange
    const expected = `
        <li>
            <h3>UniWhal</h3>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
    `;
    // act
    const result = makeImageTemplate();
    // assert
    assert.equal(result, expected);
});