import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import {GiConsoleController} from 'react-icons/gi'
import "./Navbar.css";
import {SidebarData} from '../sidebar/SlidebarData'
import {IconContext} from 'react-icons'
import avatar1 from "../../assets/bell.png";
import '../../pages/modal.css';
function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);

  
  const [detail, setStateE] = useState(false)
  const showInfo = () => setStateE(!detail);

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
        <div className="dropdown">
             <a className="btn btn-secondary dropdown-toggle" >
                <div className="dropdown">
                     <img className="dropbtn" width="20" src={avatar1} alt="avatar1" style={{float: 'right'}} />
                 <div className="dropdown-content">
                    <a href="/notification">Notification 1</a>
                    <a href="/notification">Notification 2</a>
                    <a href="/notification">Notification 3</a>
                 </div>
                 </div>
        </a>
        </div>
        <a onClick={showInfo} className="ava1">
          <img width="40" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
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
      <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-content" >
      <div className="close" onClick={showInfo}>+</div>
      <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
      <form action>
      <table>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>Hacker0312</td>
          </tr>
          <tr>
          <td>Position</td>
            <td>Admin</td>
          </tr>
          <tr>
          <td>Name</td>
            <td>Ho Minh Hieu</td>
          </tr>
          <tr>
          <td>Gmail</td>
            <td>admin00@gmail.com</td>
          </tr>
          <tr>
          <td>Phone</td>
            <td>0928123456</td>
          </tr>
        </tbody></table>
      </form>
      <a href="/setting" className="button1">Edit</a>
    </div>
  </div>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;