import React from 'react'
import '../styles/homepage/notecard.css'
import { BsPin, BsPinFill, MdOutlineLabel, MdOutlineDelete, MdOutlineUnarchive, MdOutlineDateRange } from '../utils/getIcons'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { unarchiveNoteService, deleteFromArchiveService } from '../helpers/services/index';
import { toast } from 'react-toastify';

function NoteCardArchive({ id, title, desc, pin, note, color, label}) {

  const { notesDispatch } = useNote();


  const deleteNoteHandler = () => {
    toast.success('Your note moved to trash');
    deleteFromArchiveService(notesDispatch, {...note, editedAt: new Date()})
  }

  const restoreArchiveHandler = () => {
    toast.success('Note succesfully unarchived!');
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
        {note.label && <div className="noteCard_label">
          <div className="noteCard_label-chip">
            {label}
          </div>
        </div>}
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