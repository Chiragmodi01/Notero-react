import React, { useState, useRef, useEffect } from 'react'
import { useNote } from '../helpers/context/note-context';
import '../styles/homepage/homemain.css'
import CreateNotes from './CreateNotes';
import NoNotes from './NoNotes';
import NoteCard from './NoteCard';

function HomeMain( ) {
  const { notesState, notesDispatch, search, setNote, utilsDispatch, searchFocusRef } = useNote()
  
  const [createNote, setCreateNote] = useState(false);

  const createNoteRef = useRef(null)

  const focusSearchHandler = (e) => {
    !searchFocusRef.current.contains(e.target) &&
    utilsDispatch({type: 'UNFOCUS_SEARCH_INPUT'});
  }

  const closeFiltersOptions = (e) => {
    utilsDispatch({type: 'HIDE_FILTER_OPTIONS'});
  }
  
  const closeCreateNotes = (e) => {
    if(createNote && (!createNoteRef.current.contains(e.target))){
      setCreateNote(false)
      utilsDispatch({type: 'HIDE_LABEL_OPTIONS'});
      utilsDispatch({type: 'HIDE_BG_OPTIONS'});
    }
    closeFiltersOptions(e);
    focusSearchHandler(e);
  }


  
  useEffect(() => {
    notesDispatch({type: 'SEARCH_NOTE', payload: search})
  }, [search])


  useEffect(() => {
    setTimeout(() => {
      setNote({title: "", desc: "", pin: false, editedAt: ""})
    }, 500);
  }, [notesState.notes])

  return (
    <main className='HomeMain' onClick={(e) => closeCreateNotes(e)}>
        <CreateNotes createNoteRef={createNoteRef} createNote={createNote} setCreateNote={setCreateNote}/>
        {notesState.notes.length === 0 ?
          <NoNotes />
          : 
          <div className='noteCards_container'>
              <h1 className="notes-container-head">Pinned</h1>
              <div className="notes-section pinned">
                {
                  notesState.filteredNotes.length === 0 ?
                  notesState.notes.map((note) => {
                    return (note.pin && <NoteCard label={note.label} key={note._id} setCreateNote={setCreateNote} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt} color={note.color} showBgOptions={note.showBgOptions}/>)
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return (note.pin &&<NoteCard label={note.label} key={note._id} setCreateNote={setCreateNote} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt} color={note.color} showBgOptions={note.showBgOptions}/>)
                  })
                }
              </div>

               <h1 className="notes-container-head">Others</h1>
               <div className="notes-section unpinned">
                { 
                  notesState.filteredNotes.length === 0 ?
                  notesState.notes.map((note) => {
                    return (!note.pin && <NoteCard label={note.label} key={note._id} setCreateNote={setCreateNote} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt} color={note.color}/>)
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return (!note.pin && <NoteCard label={note.label} key={note._id} setCreateNote={setCreateNote} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt} color={note.color}/>)
                  }) 
                }
               </div>
          </div>
        }
    </main>
  )
}

export default HomeMain