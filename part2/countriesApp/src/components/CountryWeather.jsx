const CountryWeather = ({country}) => {
    console.log(country)
    return (
        <div>
            <h1>WEATHER</h1>
        </div>
    )
}

export default CountryWeather

/*
axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${oneCountryObject.capital}&limit=1&appid=${api_key}`)
        .then(response => response.data)
        .then(locationResponse => setLocation(locationResponse[0]))
*/