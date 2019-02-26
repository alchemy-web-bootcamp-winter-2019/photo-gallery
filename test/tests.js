import './html-equal.js';

const test = QUnit.test;


test('make html from template with interpolation', function(assert) {

    //arrange
    const dom =  
    `<ul> 
         <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></img>
        </li>
    </ul>`;

    const expected = 
    `<ul>
         <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></img>
        </li>
    </ul>`;
    //act



    //assert
    assert.htmlEqual(dom, expected);
});
