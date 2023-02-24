import { useState } from 'react'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newPerson.name} name="name" onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newPerson.number} name="number" onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({name, number}) => 
        <p key={number}>
          {name} {number}
        </p>
      )}
    </div>
  )
}

export default App