import {useState, useEffect} from 'react'
import CountryWeather from './CountryWeather'
import axios from 'axios'

const OneCountry = ({country, show}) => {
    console.log("OneCountry rendered")
    const [oneCountryObject, setOneCountryObject] = useState(null)
    const [shown, setShown] = useState(show)

    const api_key = import.meta.env.VITE_SOME_KEY

    useEffect(() => {
        console.log('one country use effect called')
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => response.data)
        .then(countryVal => setOneCountryObject(countryVal))
    }, [country, api_key])

    if(shown == false){
        console.log('show check')
        return (
            <div>
                <p>{country}</p>
                <button onClick={() => setShown(!shown)}>{shown ? 'Hide' : 'Show'}</button>
            </div>
        )
    }

    if(!oneCountryObject){
        return null
    }
    
    return (
      <div>
        <h1>{oneCountryObject.name.common}</h1>
        <p>Capital {oneCountryObject.capital}</p>
        <b>Languages</b>
        <ul>
          {Object.values(oneCountryObject.languages).map((language, i) => <li key={i}>{language}</li>)}
        </ul>
        <img src={oneCountryObject.flags.png}></img>
        <CountryWeather country={oneCountryObject}></CountryWeather>
        <button onClick={() => setShown(!shown)}>{shown ? 'Hide' : 'Show'}</button>
      </div>
    )
  }

export default OneCountry