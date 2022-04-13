import React from 'react';
import { useNote } from '../helpers/context/note-context';

function Labels( ) {
  const {notesState} = useNote();

  return (
    <main className='Labels'>
        {notesState.trash.length === 0 &&
          <div className='noteCards_container'>
              <div className="notes-section pinned">
                {
                  notesState.filteredNotes.length === 0 ?
                  notesState.labels.map((note) => {
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

export {Labels}