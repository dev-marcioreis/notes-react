import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/CreateNotes"
import EditNotes from "./pages/EditNotes"
import Notes from "./pages/Notes"
// import notesArq  from './notes'

import { useEffect, useState } from "react"

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect( () => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <main id="App">
      <BrowserRouter>
        <Routes>
            <Route path="/notes-react" element={<Notes notes={notes} />} />
            <Route path="/notes-react/create-notes" element={<CreateNotes setNotes={setNotes} />} />
            <Route path="/notes-react/edit-notes/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App