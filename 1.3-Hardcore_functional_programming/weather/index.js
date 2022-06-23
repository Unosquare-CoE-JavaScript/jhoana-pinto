 import { OpenWeather } from "./openWeather";
 import { apiKey } from "./apiKey";
 const moment = require('moment')

 const toCelsius = temp => (temp-273.15).toFixed(2) + '°C'

 const Weather = (dt, temp) => ({ dt, temp })

const prepareItems = w => 
    toWeather(w.main.dt, w.main.temp)

const toWeather = (dt, temp) => 
    Weather(moment(dt).format('MMMM Do YYYY, h:mm a'),toCelsius(temp))

const getWeatherItems = zip =>
    OpenWeather.fetch({zip, apiKey})
    .map(json => json.list.map(prepareItems))
    .map(weathers => weathers.map(toLi))

const toLi = weatherz => `<li>${weatherz.dt} ${weatherz.temp}</li>`
 
 const app = () => {
    const goButton = document.getElementById('go');
    const input = document.getElementById('zip')
    const results = document.getElementById('results')

    goButton.addEventListener('click', () => {
        const zip = input.value.trim()
        getWeatherItems(zip).fork(console.error,html => {
            results.innerHTML = html
        })
    })
}

app();

