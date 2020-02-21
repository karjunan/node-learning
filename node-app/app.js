const fs = require('fs')

// fs.writeFileSync('notes.txt','This file is created by node js !!! ')
fs.appendFileSync('notes.txt','\n The content looks like valid')