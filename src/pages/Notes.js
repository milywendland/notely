import NoteCard from '../components/NoteCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const { id } = useParams()

  useEffect(() => {
    document.title = 'Notely'
  })
  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get('http://localhost:3001/api/notes')
      setNotes(res.data.notes)
    }
    getNotes()
  }, [])

  let navigate = useNavigate()

  const showNote = (noteId) => {
    navigate(`/notes/details/${noteId}`)
  }

  return (
    <div className="bod">
      <h2>Notes</h2>
      <div className="container">
        <div className="notes-wrapper">
          {notes.map((note) => (
            <div key={note._id}>
              <NoteCard
                name={note.name}
                image={note.image}
                description={note.description}
                onClick={() => showNote(note._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes
