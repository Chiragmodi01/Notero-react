import React from 'react'
import { useNote } from '../helpers/context/note-context';
import '../styles/homepage/no_notes.css'
import { notero, noteroLight, archive, archiveLight, trashBin, trashBinLight } from '../assets/index';
import { useLocation } from 'react-router-dom';

function NoNotesPlaceholder() {
  const { utilsState } = useNote();

  const {pathname} = useLocation();

  return (
    <div className="NoNotes">
        { pathname === '/' &&
          <>
            <img src={utilsState.darkTheme ? notero: noteroLight} alt="NoNotes_logo" className='NoNotes_notero_logo'/>
            <h2 className="NoNotes_desc">Notes you add appear here</h2>
          </>
        }
        { pathname === '/archive' &&
          <>
            <img src={utilsState.darkTheme ? archive: archiveLight} alt="NoArchives_logo" className='NoNotes_notero_logo'/>
            <h2 className="NoNotes_desc">Your archived notes appear here</h2>
          </>
        }
        { pathname === '/trash' &&
          <>
            <img src={utilsState.darkTheme ? trashBin: trashBinLight} alt="NoTrash_logo" className='NoNotes_notero_logo'/>
            <h2 className="NoNotes_desc">No notes in Trash</h2>
          </>
        }
    </div>
  )
}

export default NoNotesPlaceholder