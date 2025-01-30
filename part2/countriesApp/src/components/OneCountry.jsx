import {useState, useEffect} from 'react'
import axios from 'axios'

const OneCountry = ({country}) => {
    console.log("OneCountry rendered")
    const [oneCountryObject, setOneCountryObject] = useState(null)

    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => response.data)
        .then(countryVal => setOneCountryObject(countryVal))
    }, [country])

    console.log(oneCountryObject)

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
      </div>
    )
  }

export default OneCountry