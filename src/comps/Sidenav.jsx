import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/homepage/sidenav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineArchive, MdOutlineDelete, MdOutlineLabel } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';
import { useNote } from '../helpers/context/note-context';

function Sidenav( ) {
  const { utilsState } = useNote()


  return (
    <div className='Sidenav'>
      <div className={utilsState.hideAside ? "title_hidden sidenav_container" : "sidenav_container"}>
        <div className="sidenav_top">
          <NavLink className={({isActive}) => isActive ? 'active_menu sidenav_menu' : 'sidenav_menu'} to={"/"}>
            <AiOutlineHome size='1.3em' className='sidenav_menu_icon'/>
            <h2 className="sidenav_menu_title">Home</h2>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'active_menu sidenav_menu' : 'sidenav_menu'}  to={"/labels"}>
            <MdOutlineLabel size='1.3em' className='sidenav_menu_icon' />
            <h2 className="sidenav_menu_title">Labels</h2>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'active_menu sidenav_menu' : 'sidenav_menu'} to={"/archive"}>
            <MdOutlineArchive size='1.3em' className='sidenav_menu_icon' />
            <h2 className="sidenav_menu_title">Archive</h2>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? 'active_menu sidenav_menu' : 'sidenav_menu'} to={"/trash"}>
            <MdOutlineDelete size='1.3em' className='sidenav_menu_icon' />
            <h2 className="sidenav_menu_title">Trash</h2>
          </NavLink>
          <div className="sidenav_menu cursor-block">
            <BiUser size='1.3em' className='sidenav_menu_icon' />
            <h2 className="sidenav_menu_title">Profile</h2>
          </div>
        </div>
        <div className="sidenav_bottom">
          <div className="sidenav_user">
            <img src="https://i.pravatar.cc/32?img=68" alt="user" className="sidenav_user_img" />
            <h5 className="sidenav_user_name">Chirag Modi</h5>
          </div>
          <div className="sidenav_logout">
            <IoExitOutline size='1.5em' className='exit_icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav