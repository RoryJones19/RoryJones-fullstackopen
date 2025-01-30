import {useState, useEffect} from 'react'
import OneCountry from './components/OneCountry'
import axios from 'axios'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [shownCountries, setShownCountries] = useState([])

  useEffect(() => {
    console.log("app use effect called")
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
        shownCountries.map((country, i) => <OneCountry key={i} country={country} show={false}></OneCountry>)
      )
    }
    else{
      return (
        <OneCountry country={shownCountries[0]} show={true}></OneCountry>
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
