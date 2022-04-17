import React, { useEffect, useState, useRef } from 'react'
import '../styles/homepage/notecard.css'
import { BsPin, BsPinFill, IoColorPaletteOutline, MdOutlineArchive, MdOutlineLabel, MdOutlineDelete, MdOutlineEdit, MdOutlineDateRange } from '../utils/getIcons';
import { useNote } from '../helpers/context/note-context';
import GetCurrentDate from '../utils/getDate';
import { archiveNoteService, deleteNoteService, editNoteService } from '../helpers/services/index';
import BackgroundOptions from '../comps/BackgroundOptions';
import LabelOptions from '../comps/LabelOptions';
import {useOnClickOutside} from '../utils/useOnClickOutside';
import { toast } from 'react-toastify';

function NoteCard({ id, title, desc, pin, color, note, setCreateNote, label }) {


  const fromCreateNote = false;

  const { notesState, notesDispatch, setNote } = useNote();

  const [showBgOptions, setShowBgOptions] = useState(false);

  const [showLabelOptions, setShowLabelOptions] = useState(false);

  const closeBgOptionsHandler = () => {
    setShowBgOptions(false)
    setShowLabelOptions(false)
  }
  
  const showBgOptionsRef = useOnClickOutside(closeBgOptionsHandler, showBgOptions);
  const showLabelOptionsRef = useOnClickOutside(closeBgOptionsHandler, showLabelOptions);

  const notePinToggler = (e) => {
    editNoteService(notesDispatch, {...note, pin: !note.pin });
  }

  const deleteNoteHandler = () => {
    toast.success('Your note moved to trash');
    deleteNoteService(notesDispatch, {...note, editedAt: new Date()})
  }

  const archiveNoteHandler = () => {
    toast.success('Your note moved to archive');
    archiveNoteService(notesDispatch, {...note, editedAt: new Date()})
  }
  
  const editNoteHandler = () => {
    setNote({ ...note, title: note.title, desc:note.desc, pin:note.pin, editedAt: note.editedAt, edit:true})
    setCreateNote(true);
  }

  const showBgOptionsHandler = () => {
    setShowBgOptions(prev => !prev)
  }

  const showLabelOptionsHandler = () => {
    setShowLabelOptions(prev => !prev)
  }

  return (
    <div className='NoteCard_container'>
    <div className='NoteCard' key={id} style={{backgroundColor: color}}>
        <div className="noteCard_head">
          <h3 className='noteCard_head_title'>{title}</h3>
          { pin ? <BsPinFill size="1.4em" className='noteCard_icon' title="Unpin note" onClick={(e) => notePinToggler(e)}/> :
            <BsPin size="1.4em" className='noteCard_icon' title="Pin note" onClick={(e) => notePinToggler(e)}/>}
        </div>
        <div className="noteCard_mid">
        <h3 className='noteCard_head_desc'>{desc}</h3>
        </div>
        {note.label && <div className="noteCard_label">
          <div className="noteCard_label-chip">
            {label}
          </div>
        </div>}
        <div className={showBgOptions || showLabelOptions ? "noteCard_bottom noteCard_bottom-visible" : "noteCard_bottom"}>
          <span className='icon-span' ref={showBgOptionsRef}>
            <IoColorPaletteOutline title="Background options" className='noteCard_icon' size='1.3em'
            onClick={showBgOptionsHandler}
            />
            {showBgOptions && <BackgroundOptions showBgOptions={showBgOptions} note={note} fromCreateNote={fromCreateNote}/>}
          </span>
          <MdOutlineArchive title="Archive" className='noteCard_icon' size='1.3em' onClick={archiveNoteHandler}/>
          <span className='icon-span' ref={showLabelOptionsRef}>
            <MdOutlineLabel title="Add label" className='noteCard_icon' size='1.3em'onClick={showLabelOptionsHandler} />
            {showLabelOptions && <LabelOptions showLabelOptions={showLabelOptions} note={note}/>}
          </span>
          <MdOutlineDelete title="Delete" className='noteCard_icon' size='1.3em' onClick={deleteNoteHandler}/>
          <MdOutlineEdit title="Edit note" className='noteCard_icon' size='1.3em' onClick={editNoteHandler}/>
          <MdOutlineDateRange title={ <GetCurrentDate />} className='noteCard_icon' size='1.3em'/>
        </div>
    </div>
    </div>
  )
}

export default NoteCard