import React from 'react';
import '../styles/labels/labels.css'
import { useNote } from '../helpers/context/note-context';
import CreateLabels from '../comps/CreateLabels'

function Labels( ) {
  const {notesState} = useNote();

  return (
    <main className='Labels'>
       <div className="createLabels-container">
         <CreateLabels />
       </div>
    </main>
  )
}

export {Labels}