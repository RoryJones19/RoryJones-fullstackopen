import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const[shownPersons, setShownPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled")
      console.log(response.data)
      setPersons(response.data)
      setShownPersons(response.data)
    })
  },[])

  const addPerson = (event) => {
    console.log('add person called')
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already a new name`)
    }
    else{
      setPersons(persons.concat(newPerson))
      setShownPersons(persons.concat(newPerson))
    }
    setNewName('') 
    setNewNumber('')
    setFilter('')
  }

  const handleNameInput = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    console.log('handle filter called')
    setFilter(event.target.value)
    setShownPersons(persons.filter(person => person.name.includes(event.target.value)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterInput={handleFilterInput}></Filter>
      <h3>Add New</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}></PersonForm>
      <h2>Numbers</h2>
      <Persons shownPersons={shownPersons}></Persons>
    </div>
  )
}

export default App