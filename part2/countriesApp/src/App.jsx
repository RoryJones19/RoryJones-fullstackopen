import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [shownCountries, setShownCountries] = useState([])

  useEffect(() => {
    const request = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => setCountries(response.data))
  }, [])

  const handleInputChange = (e) => {
    setSearch(e)
    const names = countries.map((country) => country.name.common)
    const shown = names.filter((name) => name)

    console.log(typeof(shown[1]))
  }

  return (
    <>
    <div>
      <li>
        <p>find countries</p>
        <input value={search} onChange={e => handleInputChange(e.target.value)}></input>
        <p>{search}</p>
        </li>
    </div>
    </>
  )
}

export default App
