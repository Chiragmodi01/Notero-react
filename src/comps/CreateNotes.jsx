import React, { useState, useRef } from 'react'
import '../styles/homepage/create_notes.css'
import { MdOutlineArchive, MdOutlineLabel } from 'react-icons/md';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { AiOutlineClear } from 'react-icons/ai'
import { BsPin, BsPinFill } from 'react-icons/bs'
import TextareaAutosize from 'react-textarea-autosize';
import { useNote } from '../helpers/context/note-context';
import { postNoteService, archiveNoteService } from '../helpers/services/index';

function CreateNotes({ createNote, setCreateNote, createNoteRef }) {

  const { notesState, notesDispatch, note, setNote, utilsState, utilsDispatch } = useNote();

  const autoFocusRef = useRef(null);

  const closeNoteHandler = (e) => {
    e.preventDefault();
    setCreateNote(false);
  }

  
  const addNoteHandler = (e) => {
    const updatedTitle = note.title.length === 0 ? 'Untitled' : note.title;

    e.preventDefault();
    if(note.desc === ""){
      alert("Note Content cannot be empty!");
    } else {
      postNoteService(notesDispatch, {...note, title: updatedTitle, editedAt: new Date()}, setNote)
      setCreateNote(false);
    }
  }
  
  const openCreateNoteHandler = () => {
    setCreateNote(true)
    setTimeout(() => {
      autoFocusRef.current.focus()
    }, 400)
  }

  const clearNote = (e) => {
    e.preventDefault();
    if(!(note.title === "" && note.desc === "")) {
      window.confirm('Clear note? All content inside this note will be Cleared.') &&
      setNote({title: '', desc: ''})
    }
  }

  const archiveNoteHandler = () => {
    const updatedTitle = note.title.length === 0 ? 'Untitled' : note.title;
    
    console.log('Your note moved to archive');
    archiveNoteService(notesDispatch, {...note, title: updatedTitle, editedAt: new Date()}, setNote)
  }


  return (
    <div className='CreateNotes' ref={createNoteRef}>
        <div className={createNote ? 'no-display' : 'takeNotes_wrapper'} value={createNote} onClick={openCreateNoteHandler}>
            <h4 className="takeNotes_text">Take a note...</h4>
        </div>
        <form className={createNote ? 'createNote_wrapper' : 'no-display'} onSubmit={(e) => addNoteHandler(e)}>
          <div className="createNote_head">
          <TextareaAutosize value={note.title} onChange={(e) => setNote({...note, title : e.target.value})} name="title" className="createNote_title" placeholder='Title...' />
          { note.pin ?
            <BsPinFill size="1.5em" className='pin-icon' title="Unpin note" onClick={() => setNote({...note, pin : !note.pin})}/> :
            <BsPin size="1.5em" className='pin-icon' title="Pin note" onClick={() => setNote({...note, pin : !note.pin})}/>
          }
          </div>
          <div className="createNote_mid">
            <TextareaAutosize ref={autoFocusRef} value={note.desc} onChange={(e) => setNote({...note, desc : e.target.value})} name="desc" className="createNote_desc" placeholder='Take a note...' />
          </div>
          <div className="createNote_bottom">
            <div className="createNotes_bottom_left">
              <IoColorPaletteOutline className='createNote_icon' size='1.3em' title="Background options"/>
              <MdOutlineArchive className='createNote_icon' size='1.3em' title="Archive" onClick={archiveNoteHandler}/>
              <AiOutlineClear className='createNote_icon' size='1.3em' title="Clear note" onClick={(e) => clearNote(e)}/>
              <MdOutlineLabel className='createNote_icon' size='1.3em' title="Add label"/>
            </div>
            <div className="createNotes_bottom_right">
              <button className='createNotes_btn btn-close' onClick={(e) => closeNoteHandler(e)}>Close</button>
              <button className='createNotes_btn btn-add' type='submit'>Add</button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default CreateNotes