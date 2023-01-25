import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft as Arrow } from 'react-icons/ai'
import { BsSave as Save } from 'react-icons/bs'

const CreateNotes = () => {
  return (
    <section>
      <header className="create-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Arrow /></Link>
        <button className='btn btn-large'>Salvar <Save /></button>
      </header>
      <form className='create-notes__form'>
        <input type="text" autoFocus placeholder='Título...' />
        <textarea rows="28" placeholder='Adicionar informação...'></textarea>
      </form>
    </section>
  )
}

export default CreateNotes