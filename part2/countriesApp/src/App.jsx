import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [shownCountries, setShownCountries] = useState([])
  const [countryVals, setCountryVals] = useState(null)

  useEffect(() => {
    const request = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.data)
    .then(countries => {
      const names = countries.map((country) => country.name.common.toLowerCase())
      setCountries(names)
      setShownCountries(names)
    })
  }, [])

  const handleInputChange = (e) => {
    const newInput = e.toLowerCase()
    setSearch(e)
    setShownCountries(countries.filter((name) => name.includes(newInput)))
  }

  const OneCountry = ({country}) => {
    // country is just a string containing the name
    return (
      <p>{country}</p>
    )
  }

  const CountriesList = ({shownCountries}) => {
    if(shownCountries.length == 1){
      if(!countryVals){
        return null
      }
      return (
        <OneCountry country={shownCountries[0]}></OneCountry>
      )
    }
    if(shownCountries.length > 10){
      return (
        <p>Too many matches, specify filter</p>
      )
    }
    else{
      return (
        shownCountries.map((country, i) => <p key={i}>{country}</p>)
      )
    }
  }

  if (!countries) { 
    return null 
  }

  return (
    <div>
      <li>
        <p>find countries</p>
        <input value={search} onChange={e => handleInputChange(e.target.value)}></input>
        </li>
        <CountriesList shownCountries={shownCountries}></CountriesList>
    </div>
  )
}

export default App
