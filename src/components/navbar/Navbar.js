import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import {GiConsoleController} from 'react-icons/gi'
import "./Navbar.css";
import {SidebarData} from '../sidebar/SlidebarData'
import {IconContext} from 'react-icons'
import avatar from "../../assets/ava.png";
import avatar1 from "../../assets/bell.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);
  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
      <div className="menu_bars">
          <Link to='#'>
              <AiOutlineBars size={35}  onClick={showSidebar} />
          </Link>
        </div>
        <div className="sidebar__img">
        <Link to='/'><GiConsoleController size={45}/></Link>
              <h1 className="text" >ARCADE GAME</h1>
            </div>
        <div className="navbar__right">
      <a href="/notification">
          <img width="20" src={avatar1} alt="avatar1"/>
        </a>
        <a href="/info">
          <img width="50" src={avatar} alt="avatar" />
        </a>
      </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </nav>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;