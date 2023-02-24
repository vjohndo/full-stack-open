import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newPerson, setNewPerson] = useState({
    name: "",
    number: ""
  })

  const [nameFilter, setNameFilter] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(e => e.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
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