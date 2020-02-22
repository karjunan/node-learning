const validator = require('validator');
const chalk = require('chalk');
const log = chalk.blueBright.bold;


const isEmail = validator.isEmail('hell@gmail.com')

const isUrl = validator.isURL('https://www.google.com')

console.log('Is an Email : ' , log(isEmail))

console.log('Is an URL   : ', log(isUrl));
