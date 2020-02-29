const chai = require('chai')
const expect = chai.expect;

describe('CHAI Test', () => {
    context('context 1 to be tested', () => {
        it('what will this do' , () => {
             expect({name:'foo'}).to.deep.equal({name:'foo'});
             expect(5 > 8).to.be.false;
             expect({name:'krishna'}).to.have.property('name').to.equal('krishna')

        })

    })
    

})