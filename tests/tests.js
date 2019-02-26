import './html-equal.js';
import './file1.test.js';
// import './file2.test.js';

const test = QUnit.test;

test('time to write a test', function(assert) {
    assert.equal(true, false);
});