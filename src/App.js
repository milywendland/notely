import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import NoteDetails from './pages/NoteDetails'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/notes/details/:id" element={<NoteDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
