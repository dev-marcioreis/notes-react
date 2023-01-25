import { BiSearchAlt as Search } from 'react-icons/bi' 

const Notes = () => {
  return (
    <section>
        <header className="header__notes">
            <h1>Notas</h1>
            <input type="text" autoFocus placeholder="Buscar notas..." />
            <button className='btn'><Search /></button>
        </header>
        <div className="notes__container">
            
        </div>
    </section>
  )
}

export default Notes