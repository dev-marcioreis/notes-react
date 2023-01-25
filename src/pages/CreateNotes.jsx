import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineSave as Save } from 'react-icons/ai'
import { v4 as uuid } from 'uuid'

import useCreateDate from '../components/useCreateDate'


const CreateNotes = ( {setNotes} ) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()

    if(title && details) {
      const noteID = {id: uuid(), title, details, date}

      setNotes(prevNotes => [noteID, ...prevNotes])

      navigate('/notes-react/')

    }

  }

  return (
    <section>
      <header className="create-notes__header">
        <Link to='/notes-react' className='btn btn-large'><Home /> Voltar</Link>
        <button className='btn btn-large' onClick={submit}><Save /> salvar</button>
      </header>
      <form className='create-notes__form' onSubmit={submit} >
        <input type="text" autoFocus placeholder='Título...' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Adicionar informação...' value={details} onChange={e => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default CreateNotes