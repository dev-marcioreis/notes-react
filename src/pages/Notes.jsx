import { BiSearchAlt as Search } from 'react-icons/bi' 
import { AiOutlinePlus as Plus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const Notes = ( {notes} ) => {
  return (
    <section>
        <header className="header__notes">
            <h1>Notas</h1>
            <input type="text" autoFocus placeholder="Buscar notas..." />
            <button className='btn'><Search /></button>
        </header>
        <div className="notes__container">
            {
                notes.map(note => <NoteItem key={note.id} note={note} />)
            }
        </div>
        <Link className='btn add__btn' to='/notes-react/create-notes'><Plus /> nova nota</Link>
    </section>
  )
}

export default Notes