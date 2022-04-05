import React from 'react'
import '../styles/homepage/no_notes.css'
import { notero } from '../assets/assets';

function HomeMainPlaceholder() {
  return (
    <div className="NoNotes">
        <img src={notero} alt="NoNotes_logo" className='NoNotes_notero_logo'/>
        <h2 className="NoNotes_desc">Notes you add appear here</h2>
    </div>
  )
}

export default HomeMainPlaceholder