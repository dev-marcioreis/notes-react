import { BiSearchAlt as Search } from 'react-icons/bi' 
import { AiOutlinePlus as Plus } from 'react-icons/ai'
import notes  from '../notes'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const Notes = () => {
  return (
    <section>
        <header className="header__notes">
            <h1>Notas</h1>
            <input type="text" autoFocus placeholder="Buscar notas..." />
            <button className='btn'><Search /></button>
        </header>
        <div className="notes__container">
            {
                notes.map(note => <NoteItem key={note.id} />)
            }
        </div>
        <Link className='btn add__btn'><Plus /></Link>
    </section>
  )
}

export default Notes