import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineSave as Save} from 'react-icons/ai'
import { BsTrash as Trash } from 'react-icons/bs'

const EditNotes = ( {notes, setNotes} ) => {
  const {id} = useParams();
  const note = notes.find(item => item.id === id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

  return (
    <section>
      <header className="edit-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Home /> voltar</Link>
        <button className='btn btn-large'><Save /> salvar</button>
        <button className='btn btn-danger'><Trash /></button>
      </header>
      <form className='edit-notes__form'>
        <input type="text" autoFocus placeholder='Título...' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Adicionar informação...' value={details} onChange={e => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default EditNotes