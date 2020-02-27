const chai = require('chai')

describe('ENV test' , () => {
    context('Env function', () => {
        it('check for environment variable', () => {
            console.log('Environment is => ', process.env.NODE_ENV)
        })
    })
})