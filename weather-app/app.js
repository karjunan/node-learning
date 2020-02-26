const request = require('request')
const code = require('./geo_code.js')
const cast = require('./forecast.js')


code.geoCode(process.argv[2], (error, data) => {   
    if(error) {
        console.log(error);
        return error;
    } 
    cast.forecast(data,(error, response ) => {
        if(error) {
                console.log(error);
        } else {
                console.log(response.currently);
                console.log('The current temprature is '+ response.currently.temperature);
        }

    });
})

console.log('End of the file');