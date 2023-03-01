import { useEffect, useState } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'

import numbersService from "./services/persons"


const App = () => {
  const [persons, setPersons] = useState()
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: ""
  })
  const [nameFilter, setNameFilter] = useState("")
  const [alertMessage, setAlertMessage] = useState(null)

  useEffect(() => {
    numbersService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const matchedPerson = persons.find(e => e.name === newPerson.name)

    if (matchedPerson) {
      numbersService
        .updateOne(matchedPerson.id, newPerson)
        .then(returnedPerson => {
          const updatedPerons = persons.map(p => p.name !== returnedPerson.name
            ? p : returnedPerson )
          setPersons(updatedPerons)
          setAlertMessage(`Updated ${returnedPerson.name}`)
          setTimeout(() => setAlertMessage(null), 5000)
        })
    } else {
      numbersService
        .createOne(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setAlertMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => setAlertMessage(null), 5000)
        })
    }
    setNewPerson({
      name: "",
      number: ""
    })
  }

  const handleChange = (event) => {
    const key = event.target.name
    setNewPerson({
      ...newPerson,
      [key]: event.target.value
    })
  }

  const handleFilter = (event) => {
    const newNameFilter = event.target.value
    setNameFilter(newNameFilter)
  }
  
  const deletePerson = (id) => {

    const targetPerson = persons.find(person => person.id === id)

    if (window.confirm(`Do you really want to delete ${targetPerson.name} of ID ${id}?`)) {
      numbersService
        .deleteOne(id)
        .then(setPersons(persons.filter(person => person.id !== id)))
    } 
  }

  const filteredPersons = () => persons.filter((person) => {
    const name = person.name.toLowerCase()
    const searchTerm = nameFilter.toLowerCase()
    return (name.includes(searchTerm))
  })

  const personsToShow = nameFilter ? filteredPersons() : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMessage} />
      <Filter nameFilter={nameFilter} handleFilter={handleFilter} />
      <PersonForm handleChange={handleChange} handleSubmit={handleSubmit} newPerson={newPerson} />
      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} onDelete={deletePerson}/>
    </div>
  )
}

export default App