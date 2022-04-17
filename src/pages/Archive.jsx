import React, { useEffect } from 'react';
import { useNote } from '../helpers/context/note-context';
import NoNotes from '../comps/NoNotes'
import NoteCardArchive from '../comps/NoteCardArchive';

function Archive( ) {
  const {notesState, notesDispatch, search, note} = useNote();

  useEffect(() => {
    search.length !== 0 && notesDispatch({type: 'SEARCH_NOTE_IN_ARCHIVES', payload: search})
  }, [search])

  return (
    <main className='Trash'>
        {notesState.archives.length === 0 ?
          <NoNotes />
          : 
          <div className='noteCards_container'>
              <div className="notes-section pinned">
                {
                  notesState.filteredNotes.length === 0 ?
                  notesState.archives.map((note) => {
                    return <NoteCardArchive label={note.label} color={note.color} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>
                  }) :
                  notesState.filteredNotes.map((note) => {
                    return <NoteCardArchive label={note.label} color={note.color} note={note} title={note.title} desc={note.desc} id={note._id} pin={note.pin} editedAt={note.editedAt}/>
                  }) 
                }
              </div>
          </div>
        }
    </main>
  )
}

export {Archive}