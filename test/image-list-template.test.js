import images from '../data/images.js'; 

const test = QUnit.test;

function makeImageTemplate(image) {
    const html = /*html*/ `<li>
        <h2>${image.title}</h2>
        <img src="${image.src}">
        </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('run function to create image list item template', assert => {
    //Arrange
    const image = images[0];
    //Act
    const expected = /*html*/ `<li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>`;

    const result = makeImageTemplate(image);
    //Assert
    assert.equal(result, expected);
});