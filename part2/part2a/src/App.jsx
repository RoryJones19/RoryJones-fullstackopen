import { useState } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const promise = axios.get('http://localhost:3001/notes')
  console.log(promise)

  const promise2 = axios.get('http:/localhost:3001/foobarWHAT')
  console.log(promise2)


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // TERNARY EXPLANATION: Condition ? Result if true : Result if false
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
  console.log('here!')

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}></Note>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
    </div>
  )
}

export default App