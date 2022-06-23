import { compose } from 'ramda';
import { map, Task } from '../types.js';

const openWeatherUrl = ({zip, apiKey}) => `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},mx&APPID=${apiKey}`

const getJSON = url => 
    Task( (rej,res) =>
        fetch(url)
        .then(x=>x.json())
        .then(res)
        .catch(rej)
    )

const OpenWeather = {
    fetch : compose(getJSON,openWeatherUrl)
}

export {OpenWeather}