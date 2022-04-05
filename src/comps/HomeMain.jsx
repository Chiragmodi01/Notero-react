import React from 'react'
import '../styles/homepage/homemain.css'
import CreateNotes from './CreateNotes';
import NoNotes from './NoNotes';

function HomeMain() {
  return (
    <div className='HomeMain'>
        <CreateNotes />
        <NoNotes />
    </div>
  )
}

export default HomeMain