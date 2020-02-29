const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai');

chai.use(sinonChai)

var demo = require('./demo')

describe('demo file test' , () => {
    context('add function tes', () => {
        it('should add two numbers', () => {
            expect(demo.add(1,2)).to.equal(3)
        })

    context('callback add', ()=> {
        it('should add callback ', (done) => {
            demo.callbackAdd(1,2, (error,res) => {
                    expect(error).to.not.exist;
                    expect(res).to.equals(3)
                    done();
            })
        })  
    })

    context('promise callback' , () => {
        it('should add promise ', (done) => {
            demo.promiseAdd(1,2).then((result) => {
                expect(result).to.equals(3)
                done()
            }).catch((ex) => {
                console.log('promise callback error ', ex)
                done()
            })
        })

        it('should return promise ', () => {
            demo.promiseAdd(1,2).then(3);
        })
        
        it('should test promise async await', async () => {
            let result = await demo.promiseAdd(1,2);
            expect(result).to.equal(3);     
        })
    })

    context('log function', () => {
        it(' spy log', () => {
            let spy = sinon.spy(console,'log') 
            demo.logFunc();
            expect(spy.calledOnce).to.be.true
            expect(spy).to.have.been.calledOnce;
            spy.restore()
        })

        it('stub log', () => {
            let stub = sinon.stub(console, 'log');
            demo.logFunc()
            expect(stub.calledOnce).to.be.true;
        })
    })
})

})