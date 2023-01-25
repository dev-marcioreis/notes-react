import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft as Arrow } from 'react-icons/ai'
import { AiOutlineSave as Save } from 'react-icons/ai'

const CreateNotes = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submit = e => {
    e.preventDefault()

    if(title && details) {
      console.log(title, details)
    }
  }

  return (
    <section>
      <header className="create-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Arrow /> voltar</Link>
        <button className='btn btn-large' onClick={submit}><Save /> salvar nota</button>
      </header>
      <form className='create-notes__form' onSubmit={submit} >
        <input type="text" autoFocus placeholder='Título...' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Adicionar informação...' value={details} onChange={e => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default CreateNotes