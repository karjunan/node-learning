const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')


// console.log(process.argv)
console.log(yargs.argv)

// debugger

yargs.command({
    command:'add',
    description: 'Add handler' ,
    builder: {
        title : {
            describe: 'Add title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: 'Add body',
            demandOption: true,
            type:'string'
        }
    },
    handler : function(argv) {
            notes.addNote(argv.title, argv.body)
    }
}).argv


yargs.command({
    command: 'remove',
    describe: 'Remove handler',
    builder: {
        title : {
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       console.log("Remove command handler called");
       notes.removeNote(argv.title)
    }
}).argv

yargs.command({
    command: 'list',
    describe: 'List handler',
    
    handler: function() {
        console.log('List command handler');
    }
}).argv

yargs.command({
    command: 'read',
    describe: 'Read handler',
    handler: function() {
        console.log('Read command handler');
    }
}).argv

