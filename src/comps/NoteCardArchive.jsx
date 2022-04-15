import React from 'react'
import '../styles/homepage/notecard.css'
import { MdOutlineLabel, MdOutlineDelete, MdOutlineUnarchive, MdOutlineDateRange } from 'react-icons/md';
import { BsPin, BsPinFill } from 'react-icons/bs'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { unarchiveNoteService, deleteFromArchiveService } from '../helpers/services/index';

function NoteCardArchive({ id, title, desc, pin, note, color }) {

  const { notesDispatch } = useNote();


  const deleteNoteHandler = () => {
    console.log('Your note moved to trash');
    deleteFromArchiveService(notesDispatch, {...note, editedAt: new Date()})
  }

  const restoreArchiveHandler = () => {
    console.log('Note succesfully unarchived!');
    unarchiveNoteService(notesDispatch, {...note, editedAt: new Date()})
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
          <MdOutlineUnarchive title="Unarchive" className='noteCard_icon' size='1.3em' onClick={restoreArchiveHandler} />
          <MdOutlineLabel title="Add label" className='noteCard_icon' size='1.3em' />
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' onClick={deleteNoteHandler}/>
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default NoteCardArchive