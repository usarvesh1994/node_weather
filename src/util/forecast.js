const request = require("request")

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1bd75fb57f3f0e0bf8e854f6b5768abb/' + latitude + ',' + longitude

    request({
        url,
        json: true
    }, (error, {body}) => {
debugger
        if (error) {
            callback('unable to connect to weather app', undefined)
        } else if (body.error) { 
            callback(response.body.error, undefined)
        } else {
            callback(undefined,
                'The max temeprature is '+ body.currently.temperature+','+ 'The  precepitation is '+ body.currently.precipProbability + '%.'
                
            )
        }

    })

}

module.exports = forecast