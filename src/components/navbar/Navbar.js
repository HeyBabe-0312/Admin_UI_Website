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
  var src1 = "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
  var ava1 = document.getElementById("avaAdmin");
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  
  const [detail, setStateE] = useState(false)
  const showInfo = () =>{
    var avaInfo1 = document.getElementById('avaInfo');
    if( ava1 != null) {avaInfo1.src = ava1.src;}
    else {avaInfo1.src = "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";}
    setStateE(!detail);
  }
  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    var output = document.getElementById('output');
    output.src = document.getElementById('avaAdmin').src;
    setStateE(!detail);
    setEdit(!editform)};
  const setImg = () => {
    ava1.src = src1;
    setEdit(!editform);
  };

  var showImg = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    src1 = URL.createObjectURL(event.target.files[0]);
  };
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
          <img width="40" height="40" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" id="avaAdmin"/>
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
      <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" height="100px" id="avaInfo"/>
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
      <a onClick={showEdit} className="button1">Edit</a>
    </div>
              </div>
  <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
  <div className="modal-editAdmin" >
      <div className="close" onClick={showEdit}>+</div>
      <form runat="server">
              <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Image 1" id="output"  width="100px" height="100px" className="avaa"/>            
              <input accept="image/*" type='file' onChange={showImg}/>
      </form> 
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">Admin</td>
            <td className="no_border"><input type="search" id="site-search" name="q" className="inputE"
       aria-label="Search through site content" minlength="4" maxlength="16" size="35" placeholder="Hacker0312"/></td>
          </tr>
          <tr>
          <td className="no_border">Name</td>
            <td className="no_border"><input type="text" id="name" name="name" required placeholder="Ho Minh Hieu" className="inputE"
       minlength="4" maxlength="20" size="35"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><input type="email" id="email" placeholder="admin00@gmail.com" className="inputE"
       pattern=".+@globex\.com" size="35" required/></td>
          </tr>
          <tr>
          <td className="no_border">Phone</td>
            <td className="no_border"><input type="tel" id="phone" name="phone" placeholder="0928123456" className="inputE"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size="35"
       required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={setImg} >Save</a>
    </div>
    </div>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;