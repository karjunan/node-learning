const validator = require('validator');

const isEmail = validator.isEmail('hell@gmail.com')

const isUrl = validator.isURL('https://www.google.com')

console.log('Is an Email : ' , isEmail)
console.log('Is an URL   : ' , isUrl)

