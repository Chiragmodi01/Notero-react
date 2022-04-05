import React from 'react'
import '../styles/homepage/navbar.css'
import { BsFilter } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { GrDocumentNotes } from 'react-icons/gr';
import { IoMdMenu } from 'react-icons/io';

function Navbar({ setHideAside }) {
    
  return (
    <div className='Navbar'>
        <div className="navbar_left">
        <IoMdMenu size='1.5em' className='ham-menu_icon' onClick={() => setHideAside(prev => !prev)}/>
        <GrDocumentNotes size='2em' className='notero-icon'/>
        <h1 className="brandname">Notero</h1>
        </div>
        <div className="navbar_right">
        <div className='searchbox'>
            <FiSearch size='1.4em' className='search-icon'/>
            <input type="text" className="search-input" placeholder='Search'/>
            <BsFilter size="2em" className='filter-icon'/>
        </div>
        </div>
    </div>
  )
}

export default Navbar