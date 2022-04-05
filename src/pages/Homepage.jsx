import React, { useState } from 'react'
import '../styles/homepage/homepage.css'
import Sidenav from '../comps/Sidenav'
import Navbar from '../comps/Navbar'
import HomeMain from '../comps/HomeMain'

function Homepage() {
  const [hideAside, setHideAside] = useState(false);

  return (
    <div className='Homepage'>
        <Navbar setHideAside={setHideAside}/>
        <Sidenav hideAside={hideAside}/>
        <HomeMain />
    </div>
  )
}

export default Homepage