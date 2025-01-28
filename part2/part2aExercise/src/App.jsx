import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const[shownPersons, setShownPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notifMessage, setNotifMessage] = useState(null)

  useEffect(() => {
    phonebook.getAll()
    .then(persons => {
      setPersons(persons)
      setShownPersons(persons)
    })
  },[])

  const addPerson = (event) => {
    console.log('add person called')
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    
    if(persons.find(person => person.name === newName)){
      if(window.confirm(newPerson.name + "is already in the phonebook, replace the old number with a new one?")) {
        console.log("here")
        const id = persons.find(person => person.name === newName).id
        phonebook.updateNumber(id, newPerson)
        .then(returnedPerson => {
          const newPersons = persons.map(person => person.id == id ? returnedPerson : person)
          setPersons(newPersons)
          setShownPersons(newPersons)
        })
        .catch(error => {
          console.log(error)
          setNotifMessage(`${newPerson.name} has been removed from the server`)
          setTimeout(() => {
            setNotifMessage(null)
          }, 3000)
        })
      }
    }
    else{
      phonebook.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setShownPersons(persons.concat(returnedPerson))
      })
    }

    //Notification
    console.log(newPerson)
    setNotifMessage(`Added ${newPerson.name}`)
    setTimeout(() => {
      setNotifMessage(null)
    }, 5000)
    setNewName('') 
    setNewNumber('')
    setFilter('')
  }

  const deletePerson = (id) => {
    phonebook.deletePerson(id)
    .then(deletedPerson => {
      const newPersons = persons.filter(person => person.id !== deletedPerson.id)
      setPersons(newPersons)
      setShownPersons(newPersons)
    })
    .catch(error => {
      console.log(error)
    })
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
      <Notification message={notifMessage}></Notification>
      <Filter handleFilterInput={handleFilterInput}></Filter>
      <h3>Add New</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}></PersonForm>
      <h2>Numbers</h2>
      <Persons shownPersons={shownPersons} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App