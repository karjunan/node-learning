function doHomework(subject,callback) {
    console.log('Homeowork started => ', subject);
    callback()
}


doHomework('Math', () => {
    console.log('Home work finished');
} )

module.exports = {doHomework}