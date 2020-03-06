const express = require('express')
const path = require('path')
const hbs = require('hbs')

const forecast = require('./util/forecast')
const geoCode = require('./util/geoCode')

const app = express()

//express paths
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//config handlebars and views path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//static path
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sarvesh'
    })
})

app.get('/about', (req, res) => {
    res.render('About', {
        title: 'About Me',
        name: 'Created By :  Sarvesh'
    })
})

app.get('/help', (req, res) => {
    res.render('Help', {
        title: 'Help',
        name: 'We provide weather report'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Enter search Location'
        })
    }
    console.log(req.query.search)

    geoCode(req.query.search, (error, {
        longitude,
        latitude,
        location
    }={}) => {


        if (error) {
            return res.send({
                error
            })
        }
        debugger
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error
                })
            }
            res.send({
                Location: location,
                data: forecastData
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
        name: 'Created By :  Sarvesh',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
        name: 'Created By :  Sarvesh',
        message: 'Page not found'

    })
})

app.listen('3000', () => {
    console.log('server started on 3000')
})