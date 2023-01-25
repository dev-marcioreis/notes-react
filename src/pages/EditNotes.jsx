import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft as Arrow } from 'react-icons/ai'
import { AiOutlineSave as Save, AiOutlineEdit as Edit } from 'react-icons/ai'

const EditNotes = () => {
  return (
    <section>
      <header className="edit-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Arrow /> voltar</Link>
        <button className='btn btn-large'><Save /> salvar</button>
        <button className='btn btn-danger'><Edit /> editar</button>
      </header>
      <form className='edit-notes__form'>
        <input type="text" autoFocus placeholder='Título...' />
        <textarea rows="28" placeholder='Adicionar informação...'></textarea>
      </form>
    </section>
  )
}

export default EditNotes