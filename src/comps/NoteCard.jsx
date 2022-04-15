import React, { useEffect, useState, useRef } from 'react'
import '../styles/homepage/notecard.css'
import { MdOutlineArchive, MdOutlineLabel, MdOutlineDelete, MdOutlineEdit, MdOutlineDateRange } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { BsPin, BsPinFill } from 'react-icons/bs'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { archiveNoteService, deleteNoteService, editNoteService } from '../helpers/services/index';
import BackgroundOptions from '../comps/BackgroundOptions';
import {useOnClickOutside} from '../utils/useOnClickOutside';

function NoteCard({ id, title, desc, pin, color, note, setCreateNote }) {


  const fromCreateNote = false;

  const { notesState, notesDispatch, setNote } = useNote();

  const [showBgOptions, setShowBgOptions] = useState(false);

  const closeBgOptionsHandler = () => {
    setShowBgOptions(false)
  }
  
  const showBgOptionsRef = useOnClickOutside(closeBgOptionsHandler, showBgOptions);

  const notePinToggler = () => {
    let payload = notesState.notes.map((item) => {
      return item._id === id ? {...item, pin: !item.pin} : item
    })
    notesDispatch({type: 'UPDATE_NOTE', payload: payload})
  }

  const deleteNoteHandler = () => {
    console.log('Your note moved to trash');
    deleteNoteService(notesDispatch, {...note, editedAt: new Date()})
  }

  const archiveNoteHandler = () => {
    console.log('Your note moved to archive');
    archiveNoteService(notesDispatch, {...note, editedAt: new Date()})
  }
  
  const editNoteHandler = () => {
    setNote({ ...note, title: note.title, desc:note.desc, pin:note.pin, editedAt: note.editedAt, edit:true})
    setCreateNote(true);
  }

  const showBgOptionsHandler = () => {
    console.log(showBgOptions)
    setShowBgOptions(prev => !prev)
  }

  return (
    <div className='NoteCard_container'>
    <div className='NoteCard' key={id} style={{backgroundColor: color}}>
        <div className="noteCard_head">
          <h3 className='noteCard_head_title'>{title}</h3>
          { pin ? <BsPinFill size="1.4em" className='noteCard_icon' title="Unpin note" onClick={() => notePinToggler()}/> :
            <BsPin size="1.4em" className='noteCard_icon' title="Pin note" onClick={() => notePinToggler()}/>}
        </div>
        <div className="noteCard_mid">
        <h3 className='noteCard_head_desc'>{desc}</h3>
        </div>
        <div className={showBgOptions ? "noteCard_bottom noteCard_bottom-visible" : "noteCard_bottom"}>
          <span ref={showBgOptionsRef}>
          <IoColorPaletteOutline title="Background options" className='noteCard_icon' size='1.3em'
          onClick={showBgOptionsHandler}
          />
          {showBgOptions && <BackgroundOptions showBgOptions={showBgOptions} note={note} fromCreateNote={fromCreateNote}/>}
          </span>
          <MdOutlineArchive title="Archive" className='noteCard_icon' size='1.3em' onClick={archiveNoteHandler}/>
          <MdOutlineLabel title="Add label" className='noteCard_icon' size='1.3em' />
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' onClick={deleteNoteHandler}/>
          <MdOutlineEdit title="Edit note" className='noteCard_icon' size='1.3em' onClick={editNoteHandler}/>
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
    </div>
  )
}

export default NoteCard