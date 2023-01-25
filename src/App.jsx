import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/CreateNotes"
import EditNotes from "./pages/EditNotes"
import Notes from "./pages/Notes"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/notes-react" element={<Notes />} />
            <Route path="/notes-react/create-notes" element={<CreateNotes />} />
            <Route path="/notes-react/edit-notes/:id" element={<EditNotes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App