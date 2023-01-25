import { BiSearchAlt as Search } from 'react-icons/bi' 
import { AiOutlinePlus as Plus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { useState } from 'react'

const Notes = ( {notes} ) => {
  const [search, setSearch] = useState(false)
  const [text, setText] = useState('')
  const [filterNotes, setFilterNotes] = useState(notes)

  const handleSearch = () => {
    setFilterNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())) {
        return note;
      }
    }))
  }

  return (
    <section>
        <header className="header__notes">
            {!search && <Link to='/notes-react'><h1>Notas</h1></Link>}
            {search && <input type="text" autoFocus placeholder="Buscar notas..." value={text} onChange={e => {setText(e.target.value); handleSearch()}} />}
            <button className='btn' onClick={() => setSearch(prevState => !prevState)}><Search /></button>
        </header>
        <div className="notes__container">
            {
                filterNotes.map(note => <NoteItem key={note.id} note={note} />)
            }
        </div>
        <Link className='btn add__btn' to='/notes-react/create-notes'><Plus /> nova nota</Link>
    </section>
  )
}

export default Notes