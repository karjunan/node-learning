const validator = require('validator');
const chalk = require('chalk');
const log = chalk.blueBright.bold;


const isEmail = validator.isEmail('hell@gmail.com')

const isUrl = validator.isURL('https://www.google.com')

console.log('Is an Email : ' , log(isEmail))

console.log('Is an URL   : ', log(isUrl));
console.log(chalk.bold('nodemon is working Mate !!'))


console.log('arg 2 : ', process.argv[2])
console.log('arg 1 : ', process.argv[1])