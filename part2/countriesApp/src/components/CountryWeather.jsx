import {useState, useEffect} from 'react'
import axios from 'axios'

const CountryWeather = ({country}) => {
    const [location, setLocation] = useState(null)
    const [weather, setWeather] = useState(null)

    const api_key = import.meta.env.VITE_SOME_KEY
    console.log(api_key)
    
    useEffect(() => {
        console.log(api_key)
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${api_key}`)
        .then(response => {
            console.log(response.data[0].lat)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${api_key}`)
            .then(response => setWeather(response.data))}
        )

        /* WORKS BUT REACHED API FREE LIMIT
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
        .then(response => {
            setWeather(response.data)
            console.log(response.data)
            */
    }, [])

    if(!weather){
        return null
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather.main.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            {console.log(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)}
            <p>Wind: {weather.wind.speed} m/s</p>
            {console.log(weather)}
        </div>
    )
}

export default CountryWeather