import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const[shownPersons, setShownPersons] = useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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