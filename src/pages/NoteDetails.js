import axios from 'axios'
import { useState, useEffect } from 'react'
import NoteDeets from '../components/NoteDeets'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NoteDetails = () => {
  const { id } = useParams()
  const [note, setNote] = useState('')

  useEffect(() => {
    const getNote = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/notes/details/${id}`
      )
      setNote(res.data.note)
    }
    getNote()
  }, [id])

  let navigate = useNavigate()

  return (
    <div className="deets-wrapper">
      <div className="deets">
        <div className="detailsection">
          <div key={note.id}>
            <NoteDeets
              name={note.name}
              description={note.description}
              image={note.image}
            />
          </div>
          <button>X</button>
        </div>
      </div>
    </div>
  )
}

export default NoteDetails
