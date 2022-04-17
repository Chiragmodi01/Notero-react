import React from 'react'
import '../styles/homepage/notecard.css'
import { BsPin, BsPinFill, MdOutlineDelete, MdOutlineRestoreFromTrash, MdOutlineDateRange } from '../utils/getIcons'
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { postNoteService } from '../helpers/services';
import { toast } from 'react-toastify';

function NoteCardTrash({ id, title, desc, pin, note, color, label }) {

  const { notesDispatch} = useNote();


  const deleteForeverHandler = () => {
    window.confirm('Delete note? your note will be deleted forever!') && 
    toast.success('Note succesfully deleted!');
    notesDispatch({type: 'DELETE_FOREVER_NOTE', payload: id})
  }

  const restoreNoteHandler = () => {
    toast.success('Note succesfully restored!');
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
        {note.label && <div className="noteCard_label">
          <div className="noteCard_label-chip">
            {label}
          </div>
        </div>}
        <div className="noteCard_bottom">
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' onClick={deleteForeverHandler}/>
          <MdOutlineRestoreFromTrash title="Restore" className='noteCard_icon' size='1.3em' onClick={restoreNoteHandler} />
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default NoteCardTrash