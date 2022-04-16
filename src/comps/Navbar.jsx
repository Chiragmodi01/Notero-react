import React  from 'react'
import '../styles/homepage/navbar.css'
import { IoMdMenu, GrDocumentNotes, FiSearch, BsFilter, BsSun, BsMoon } from '../utils/getIcons';
import { useNote } from '../helpers/context/note-context';
import { useNavigate } from 'react-router-dom';
import Filters from '../comps/Filters';
import { toast } from 'react-toastify';

function Navbar( ) {
  const { utilsState, utilsDispatch, search, setSearch, searchFocusRef } = useNote();
  let navigate = useNavigate();
  


  const themeClickHandler = () => {
    utilsDispatch({type: 'CHANGE_THEME'})
    const msgLight = "Ew, you're using light mode!";
    const msgDark = "✨ God bless your precious eyes!";
    !utilsState.darkTheme && toast(msgDark);
    utilsState.darkTheme && toast.warning(msgLight);
    // toast(utilsState.darkTheme ? msgLight: msgDark);
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
            <FiSearch size='1.4em' className={utilsState.focusSearchInput ? 'search-icon dark': 'search-icon'}/>
            <input value={search} type="text" className={utilsState.focusSearchInput ? 'search-input dark': 'search-input'} placeholder='Search' ref={searchFocusRef} onClick={() => utilsDispatch({type: 'FOCUS_SEARCH_INPUT'})} onChange={(e) => setSearch(e.target.value)}/>
            <span className="navbar_filters_container">
              <BsFilter title='Filters' size="2em" className={utilsState.focusSearchInput ? 'filter-icon dark': 'filter-icon'} onClick={() => utilsDispatch({type: 'SHOW_FILTER_OPTIONS'})}/>
              {utilsState.showFilterOptions && <Filters />}
            </span>
        </div>
        {utilsState.darkTheme && <BsSun title="Light theme" size='1.7em' className='ham-menu_icon theme' onClick={() =>themeClickHandler()}/>}
        {!utilsState.darkTheme && <BsMoon title="Dark theme" size='1.7em' className='ham-menu_icon theme' onClick={() => themeClickHandler()}/>}
        </div>
    </div>
  )
}

export default Navbar