import React from 'react'
import '../styles/homepage/notecard.css'
import {  MdOutlineDelete, MdOutlineRestoreFromTrash, MdOutlineDateRange } from 'react-icons/md';
import { BsPin, BsPinFill } from 'react-icons/bs'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { postNoteService } from '../helpers/services';

function NoteCardTrash({ id, title, desc, pin, note, color }) {

  const { notesDispatch} = useNote();


  const deleteForeverHandler = () => {
    window.confirm('Delete note? your note will be deleted forever!') &&
    notesDispatch({type: 'DELETE_FOREVER_NOTE', payload: id})
  }

  const restoreNoteHandler = () => {
    console.log('Note succesfully restored!');
    postNoteService(notesDispatch, {...note, editedAt: new Date()})
    notesDispatch({type: 'RESTORE_NOTE', payload: note})
  }

  return (
    <div className='NoteCard' key={id} style={{backgroundColor: color}}>
        <div className="noteCard_head">
          <h3 className='noteCard_head_title'>{title}</h3>
          { pin ? <BsPinFill size="1.4em" className='noteCard_icon' title="Unpin note"/> :
            <BsPin size="1.4em" className='noteCard_icon' title="Pin note"/>}
        </div>
        <div className="noteCard_mid">
        <h3 className='noteCard_head_desc'>{desc}</h3>
        </div>
        <div className="noteCard_bottom">
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' onClick={deleteForeverHandler}/>
          <MdOutlineRestoreFromTrash title="Restore" className='noteCard_icon' size='1.3em' onClick={restoreNoteHandler} />
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default NoteCardTrash