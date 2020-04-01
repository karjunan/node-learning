const fs = require('fs')

const buffer = fs.readFileSync('test.json');
const jsonObject = JSON.parse(buffer.toString())
console.log(jsonObject);
jsonObject.name = 'krishna'
jsonObject.age = 35

console.log(jsonObject)
const jsonFileData = JSON.stringify(jsonObject);
fs.writeFileSync('test.json',jsonFileData)