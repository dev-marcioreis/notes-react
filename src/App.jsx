import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/CreateNotes"
import EditNotes from "./pages/EditNotes"
import Notes from "./pages/Notes"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="create-notes" element={<CreateNotes />} />
            <Route path="edit-notes/:id" element={<EditNotes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App