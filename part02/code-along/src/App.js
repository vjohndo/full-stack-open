import { useEffect, useState } from "react"
import Note from "./components/Note"
import Notification from "./components/Notification"
import noteService from "./services/notes"


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState("a new note")
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialData => {
        setNotes(initialData)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()

    const newNoteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    noteService
      .create(newNoteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote("")
      })

  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id !== id ? n : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note ${note.content} was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const handleOnChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important) 

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={()=>toggleImportanceOf(note.id)} 
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleOnChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App
