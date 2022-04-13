import React, { useEffect } from 'react';
import { useNote } from '../helpers/context/note-context';
import NoNotes from '../comps/NoNotes'
import NoteCardTrash from '../comps/NoteCardTrash';

function Trash( ) {
  const {notesState, notesDispatch, search} = useNote();

  useEffect(() => {
    search.length !== 0  && notesDispatch({type: 'SEARCH_NOTE_IN_TRASH', payload: search})
  }, [search])
  
  return (
    <main className='Trash'>
        {notesState.trash.length === 0 ?
          <NoNotes />
          : 
          <div className='noteCards_container'>
              <div className="notes-section pinned">
                {
                  notesState.filteredNotes.length === 0 ?
                  notesState.trash.map((note) => {
                    return <NoteCardTrash note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return <NoteCardTrash note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>
                  }) 
                }
              </div>
          </div>
        }
    </main>
  )
}

export {Trash}