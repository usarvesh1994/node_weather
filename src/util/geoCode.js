const request = require("request");

request

const geoCode = (address, callback) => {

    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidXNhcnZlc2giLCJhIjoiY2s2dms5ZmhoMDBzcjNlcWFwZWdvNWF2NyJ9.Lx52UPownRgTjl90j_WyOw&limit=1';
    
    request({
        url: geoURL,
        json: true
    }, (error,{body}) => {
        debugger
        if (error) {
            callback('cannot retrive geolocation', undefined)
        } else if (body.features.length === 0) {
            callback('enter valied locaiton',undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].geometry.coordinates[0],
                latitude: body.features[0].geometry.coordinates[1],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geoCode