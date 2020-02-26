const request = require('request')
const code = require('./geo_code.js')
const cast = require('./forecast.js')

const input = process.argv;

if(!input[2]) {
    console.log('Enter a city....')
    return;
}

code.geoCode(input[2], (error, data) => {   
   
    if(error) {
        console.log(error);
        return error;
    } 
    cast.forecast(data,(error, {currently} ) => {
        if(error) {
                console.log(error);
        } else {
                const { temperature } = currently;
                console.log('The current temprature is '+ temperature);
        }

    });
})

console.log('End of the file');