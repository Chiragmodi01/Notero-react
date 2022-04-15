import React, { useState, useRef } from 'react'
import '../styles/homepage/navbar.css'
import { BsFilter } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { GrDocumentNotes } from 'react-icons/gr';
import { IoMdMenu } from 'react-icons/io';
import { useNote } from '../helpers/context/note-context';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Filters from '../comps/Filters';

function Navbar( ) {
  const { utilsState, utilsDispatch, search, setSearch } = useNote();
  let navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);

  const [searchFocus, setSearchFocus] = useState(false)
  const searchFocusRef = useRef(null)

  const focusSearchHandler = (e) => {
    searchFocusRef.current.contains(e.target) ?
    setSearchFocus(true) : setSearchFocus(false)
  }

  const themeClickHandler = () => {
    utilsDispatch({type: 'CHANGE_THEME'})
    const msgLight = "Ew, you're using light mode!";
    const msgDark = "God bless your precious eyes!";
    console.log(utilsState.darkTheme ? msgLight: msgDark);
  }
    
  return (
    <div className='Navbar'>
        <div className="navbar_left">
        <IoMdMenu size='1.5em' className='ham-menu_icon' onClick={() => utilsDispatch({type: 'HIDE_ASIDE'})}/>
        <GrDocumentNotes size='2em' className='notero-icon' onClick={() => navigate("/")}/>
        <h1 className="brandname" onClick={() => navigate("/")}>Notero</h1>
        </div>
        <div className="navbar_right">
        <div className='searchbox'>
            <FiSearch size='1.4em' className={searchFocus ? 'search-icon dark': 'search-icon'}/>
            <input value={search} type="text" className={searchFocus ? 'search-input dark': 'search-input'} placeholder='Search' ref={searchFocusRef} onClick={(e) => focusSearchHandler(e)} onChange={(e) => setSearch(e.target.value)}/>
            <span className="navbar_filters_container">
              <BsFilter title='Filters' size="2em" className={searchFocus ? 'filter-icon dark': 'filter-icon'} onClick={() => setShowFilters(prev => !prev)}/>
              {showFilters && <Filters />}
            </span>
        </div>
        {utilsState.darkTheme && <BsSun title="Light theme" size='1.7em' className='ham-menu_icon theme' onClick={() =>themeClickHandler()}/>}
        {!utilsState.darkTheme && <BsMoon title="Dark theme" size='1.7em' className='ham-menu_icon theme' onClick={() => themeClickHandler()}/>}
        </div>
    </div>
  )
}

export default Navbar