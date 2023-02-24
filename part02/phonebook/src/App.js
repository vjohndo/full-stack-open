import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.find(e => e.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPersonObject = {
        name: newName
      }
      setPersons(persons.concat(newPersonObject))
      setNewName("")
    }
  }

  const handleChange = (event) => {
    const newNameValue = event.target.value
    setNewName(newNameValue)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => 
        <p key={index}>
          {person.name}
        </p>
      )}
    </div>
  )
}

export default App