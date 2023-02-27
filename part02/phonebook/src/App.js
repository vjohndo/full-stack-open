import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

import numbersService from "./services/persons"


const App = () => {
  const [persons, setPersons] = useState()
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: ""
  })
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {
    numbersService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(e => e.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`)
    } else {
      numbersService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
      setNewPerson({
        name: "",
        number: ""
      })
    }
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

  const filteredPersons = () => persons.filter((person) => {
    const name = person.name.toLowerCase()
    const searchTerm = nameFilter.toLowerCase()
    return (name.includes(searchTerm))
  })

  const personsToShow = nameFilter ? filteredPersons() : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleFilter={handleFilter} />
      <PersonForm handleChange={handleChange} handleSubmit={handleSubmit} newPerson={newPerson} />
      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App