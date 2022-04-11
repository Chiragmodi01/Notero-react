import React from 'react'
import '../styles/homepage/notecard.css'
import { MdOutlineArchive, MdOutlineLabel, MdOutlineDelete, MdOutlineEdit, MdOutlineDateRange } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { BsPin, BsPinFill } from 'react-icons/bs'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';

function NoteCard({ id, title, desc, pin }) {

  const { notesState, notesDispatch } = useNote();


  const notePinToggler = () => {
    let payload = notesState.notes.map((item) => {
      return item._id === id ? {...item, pin: !item.pin} : item
    })
    notesDispatch({type: 'UPDATE_NOTE', payload: payload})
  }

  return (
    <div className='NoteCard' key={id}>
        <div className="noteCard_head">
          <h3 className='noteCard_head_title'>{title}</h3>
          { pin && <BsPinFill size="1.4em" className='noteCard_icon' title="Unpin note" onClick={() => notePinToggler()}/>}
          { !pin && <BsPin size="1.4em" className='noteCard_icon' title="Pin note" onClick={() => notePinToggler()}/>}
        </div>
        <div className="noteCard_mid">
        <h3 className='noteCard_head_desc'>{desc}</h3>
        </div>
        <div className="noteCard_bottom">
          <IoColorPaletteOutline title="Background options" className='noteCard_icon' size='1.3em' />
          <MdOutlineArchive title="Archive" className='noteCard_icon' size='1.3em' />
          <MdOutlineLabel title="Add label" className='noteCard_icon' size='1.3em' />
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' />
          <MdOutlineEdit title="Edit note" className='noteCard_icon' size='1.3em' />
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default NoteCard