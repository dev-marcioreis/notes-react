import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/CreateNotes"
import EditNotes from "./pages/EditNotes"
import Notes from "./pages/Notes"
import notesArq  from './notes'

import { useState } from "react"

const App = () => {
  const [notes, setNotes] = useState(notesArq)

  return (
    <main id="App">
      <BrowserRouter>
        <Routes>
            <Route path="/notes-react" element={<Notes notes={notes} />} />
            <Route path="/notes-react/create-notes" element={<CreateNotes />} />
            <Route path="/notes-react/edit-notes/:id" element={<EditNotes />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App