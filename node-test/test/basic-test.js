const assert = require('assert')

describe( 'file to be tested', () => {
    context('function to be  tested', () => {
        before( () => {
            const data = {
                name:'krishna'
            }
            console.log('doing before operation')
        })

        after(() => {
            console.log('doing after operation')
        })

        beforeEach(() => {
            console.log('running before each')
        })
        it('should do something', () => {
            assert.equal(1,1);
        })
        it('do something else', () => {
            assert.equal('krishna','krishna');
        })
        it('validate equals', () => {
            assert.deepEqual({name:'krishna'},{name: 'krishna'});
        })

        it('this is a pending  test');
    })

    context('second context function', () => {
        it('pending test');
    })

})