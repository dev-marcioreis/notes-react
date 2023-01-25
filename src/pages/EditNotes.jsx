import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AiOutlineHome as Home, AiOutlineSave as Save } from 'react-icons/ai'
import { BsTrash as Trash } from 'react-icons/bs'
import useCreateDate from '../components/useCreateDate'

const EditNotes = ( {notes, setNotes} ) => {
  const {id} = useParams();
  const note = notes.find(item => item.id === id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();
  const navigate = useNavigate()

  const form = e => {
    e.preventDefault()

    if(title && details) {
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id === id) {
          item = newNote;
        }

        return item;
      })

      setNotes(newNotes);
    }

    navigate('/notes-react')
  }

  const deleteNote = () => {
    if(window.confirm('Tem certeza que deseja deletar esta nota?')) {
      const newNotes = notes.filter(item => item.id !== id);

      setNotes(newNotes)

      navigate('/notes-react')
    }
  }

  return (
    <section>
      <header className="edit-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Home /> voltar</Link>
        <button className='btn btn-large' onClick={form}><Save /> salvar</button>
        <button className='btn btn-danger' onClick={deleteNote}><Trash /></button>
      </header>
      <form className='edit-notes__form' onSubmit={form}>
        <input type="text" autoFocus placeholder='Título...' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Adicionar informação...' value={details} onChange={e => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default EditNotes