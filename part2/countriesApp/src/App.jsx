import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [shownCountries, setShownCountries] = useState([])

  useEffect(() => {
    console.log("use effect called")
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.data)
    .then(countriesResponse => {
      setCountries(countriesResponse)
      setShownCountries(countriesResponse.map(country => country.name.common.toLowerCase()))
    })
  }, [])

  const handleInput = (event) => {
    console.log("handle input called")
    event.preventDefault()
    const newInput = event.target.value.toLowerCase()
    setInput(newInput)
    const shown = countries.map((country) => country.name.common.toLowerCase()).filter((name) => name.includes(newInput))
    setShownCountries(shown)
  }

  const OneCountry = ({country}) => {
    console.log("OneCountry rendered")
    const oneCountryObject = countries.find(it => it.name.common.toLowerCase() == country)
    console.log(oneCountryObject)

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

  const CountriesList = () => {
    console.log("Countries List rendered")
    if(shownCountries.length == 0){
      return null
    }
    if(shownCountries.length > 10){
      return (
        <p>Too many results, specify search</p>
      )
    }
    else if(shownCountries.length > 1){
      return (
        shownCountries.map((country, i) => <p key={i}>{country}</p>)
      )
    }
    else{
      return (
        <OneCountry country={shownCountries[0]}></OneCountry>
      )
    }
  }

  if(!countries){
    return null
  }

  return (
    <div>
      <p>Find a country</p>
      <input value={input} onChange={handleInput}></input>
      <p>{input}</p>
      <CountriesList></CountriesList>
    </div>
  )
}

export default App
