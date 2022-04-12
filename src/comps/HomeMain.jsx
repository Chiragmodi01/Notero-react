import React, { useState, useRef, useEffect } from 'react'
import { useNote } from '../helpers/context/note-context';
import '../styles/homepage/homemain.css'
import CreateNotes from './CreateNotes';
import NoNotes from './NoNotes';
import NoteCard from './NoteCard';

function HomeMain( ) {
  const { notesState, notesDispatch, search,  } = useNote()

  const [createNote, setCreateNote] = useState(false);
  const createNoteRef = useRef(null)
  
  const closeCreateNotes = (e) => {
    !createNoteRef.current.contains(e.target) &&
    setCreateNote(false)
  }

  
  useEffect(() => {
    notesDispatch({type: 'SEARCH_NOTE', payload: search})
  }, [search])


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
                    return (note.pin && <NoteCard note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>)
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return (note.pin &&<NoteCard note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>)
                  }) 
                }
              </div>

               <h1 className="notes-container-head">Others</h1>
               <div className="notes-section unpinned">
                { 
                  notesState.filteredNotes.length === 0 ?
                  notesState.notes.map((note) => {
                    return (!note.pin && <NoteCard note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>)
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return (!note.pin && <NoteCard note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>)
                  }) 
                }
               </div>
          </div>
        }
    </main>
  )
}

export default HomeMain