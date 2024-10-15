import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar({setSidebar}) {
  return (
    <nav className='flex-div'>
    <div className='nav-left  flex-div'>
       <img className='menu-icon' onClick={()=> setSidebar( prev=>prev===false?true:false)}  src="./images/menu.png" alt="menu"></img>
       <Link to="/"><img className='logo' src="./images/logo.png" alt="logo"></img></Link>
    </div>

    <div className='nav-middle  flex-div'>
       <div className='search-box  flex-div'>
         <input type="text" placeholder='Search'></input>
         <img src="./images/search.png" alt="search"></img>
       </div>
       
    </div>

    <div className='nav-right  flex-div'>
      <img src="./images/upload.png" alt="upload"></img>
      <img src="./images/more.png" alt="more"></img>
      <img src="./images/notification.png" alt="notification"></img>
      <img src="./images/jack.png" className='user-icon' alt="jack"></img>
    </div>

 </nav>
  )
}

export default Navbar
