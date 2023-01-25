import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/CreateNotes"
import EditNotes from "./pages/EditNotes"
import Notes from "./pages/Notes"

const App = () => {
  return (
    <main id="App">
      <BrowserRouter>
        <Routes>
            <Route path="/notes-react" element={<Notes />} />
            <Route path="/notes-react/create-notes" element={<CreateNotes />} />
            <Route path="/notes-react/edit-notes" element={<EditNotes />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App