const request = require('request')

const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2FyanVuYW4iLCJhIjoiY2s3MjJ5MHV3MDRocDNrbnN6ZDM4OGJsaiJ9.hm93PVPsczYYFzC7ls33rg&limit=1';

    request({url, json: true}, ( error, response ) => {

        if(error) {
            callback('Unable to connect to location services ', undefined);
        } else if( response.body.features.length == 0 ){

            callback('Unable to find the location ', undefined);
        } else {
            callback(undefined, {
                lattitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name,
            })
        }
    })

}

module.exports =  {
    geoCode
}
