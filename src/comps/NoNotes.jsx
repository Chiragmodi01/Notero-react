import React from 'react'
import { useNote } from '../helpers/context/note-context';
import '../styles/homepage/no_notes.css'
import { notero, noteroLight } from '../assets/index';

function NoNotesPlaceholder() {
  const { utilsState } = useNote();

  return (
    <div className="NoNotes">
        <img src={utilsState.darkTheme ? notero: noteroLight} alt="NoNotes_logo" className='NoNotes_notero_logo'/>
        <h2 className="NoNotes_desc">Notes you add appear here</h2>
    </div>
  )
}

export default NoNotesPlaceholder