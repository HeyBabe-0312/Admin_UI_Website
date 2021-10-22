import {React,useState} from 'react';
import "./Search.css";
import "./pagination.css";
import "./icon.css";
import "./table.css";
import "./modal.css";
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
// import {FaUserCircle} from 'react-icons/fa'

function Users() {
  var src1 = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
  var ava1 = document.getElementById('ava1');
  const [detail, setState] = useState(false)
  const showInfo = () => {
    var avaInfo1 = document.getElementById('avaInfo1');
    if( ava1 != null) {avaInfo1.src = ava1.src;}
    else {avaInfo1.src = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";}
    setState(!detail);
  };
  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    var avaInfo1 = document.getElementById('avaInfo1');
    if( ava1 != null) {avaInfo1.src = ava1.src;}
    else {avaInfo1.src = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";}
    document.getElementById('out').src = document.getElementById('avaInfo1').src;
    setEdit(!editform);
  }

  const setImg = () => {
    ava1.src = src1;
    setEdit(!editform);
  };
  var showImg = function(event) {
    var output = document.getElementById('out');
    try {
      src1 = URL.createObjectURL(event.target.files[0]);
      output.src = URL.createObjectURL(event.target.files[0]);
    } catch (error) {
       src1 ="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
       output.src = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
    }
  };
  return (
    <div>
      <input list="ice-cream-flavors" id="mySort" name="ice-cream-choice"  placeholder="  Sort By"/>
        <datalist id="ice-cream-flavors">
          <option value="Id">
          </option><option value="Name">
          </option><option value="Email">
          </option><option value="TimePlay">
          </option></datalist>
      <input type="search" id="myInput" onkeyup="myFunction()" placeholder="   Search for ids, accounts.." />
         <div></div>
    <table>
        <tbody><tr>
          <th>ID</th>
            <th>Accounts</th>
            <th>Email</th>
            <th>Timeplay</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>270200</td>
            <td><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" height="30px" id="ava1" className="ava"/><a className="name">Ho Minh Hieu</a></td>
            <td>user00000@gmail.com</td>
            <td>More than 234 hours</td>
            <td><FiEdit onClick={showEdit} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} size="20px" className="iconfont2"/></td>
          </tr>
          <tr>
          <td>270201</td>
            <td><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" id="ava2" className="ava"/><a className="name">Le Trung Nghia</a></td>
            <td>user00001@gmail.com</td>
            <td>More than 341 hours</td>
            <td><FiEdit onClick={showEdit} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>270202</td>
            <td><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" id="ava3" className="ava"/><a className="name">Nguyen Dang Tuan Kiet</a></td>
            <td>user00002@gmail.com</td>
            <td>More than 232 hours</td>
            <td><FiEdit onClick={showEdit} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>270203</td>
            <td><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" id="ava4" className="ava"/><a className="name">Ma Hai Nhat</a></td>
            <td>user00003@gmail.com</td>
            <td>More than 34 hours</td>
            <td><FiEdit onClick={showEdit} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>270204</td>
            <td><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" id="ava5" className="ava"/><a className="name">Bui Duy Phuong</a></td>
            <td>user00004@gmail.com</td>
            <td>More than 137 hours</td>
            <td><FiEdit onClick={showEdit} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
        </tbody></table>
        <div>
        <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
    <div className="modal-editUser" >
      <div className="close" onClick={showEdit}>+</div>
      <form runat="server">
              <img alt="Image 1" id="out"  width="100px" height="100px" className="avaa"/>            
              <input accept="image/*" type='file' onChange={showImg}/>
      </form> 
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">Id</td>
            <td className="no_border">270200</td>
          </tr>
          <tr>
          <td className="no_border">Account</td>
            <td className="no_border"><input type="search" id="site-search" name="q" className="inputE"
       aria-label="Search through site content" minlength="4" maxlength="16" size="35" placeholder="User0312"/></td>
          </tr>
          <tr>
          <td className="no_border">Name</td>
            <td className="no_border"><input type="text" id="name" name="name" required placeholder="Ho Minh Hieu" className="inputE"
       minlength="4" maxlength="20" size="35"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><input type="email" id="email" placeholder="user00000@gmail.com" className="inputE"
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
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-content" >
      <div className="close" onClick={showInfo}>+</div>
      <img width="100px" height="100px" id="avaInfo1" />
      <form action>
      <table>
        <tbody>
        <tr>
            <td>Id</td>
            <td>270200</td>
          </tr>
          <tr>
            <td>Account</td>
            <td>User0312</td>
          </tr>
          <tr>
          <td>Name</td>
            <td>Ho Minh Hieu</td>
          </tr>
          <tr>
          <td>Gmail</td>
            <td>user00000@gmail.com</td>
          </tr>
          <tr>
          <td>Phone</td>
            <td>0928123456</td>
          </tr>
          <tr>
          <td>Timeplay</td>
            <td>More than 234 hours</td>
          </tr>
        </tbody></table>
      </form>
    </div>
  </div>
        <div className="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
<input list="show_table" id="myShow" name="ice-cream-choice"  placeholder="  Show 5"/>
        <datalist id="show_table">
          <option value="Show 50">
          </option><option value="Show 30">
          </option><option value="Show 20">
          </option><option value="Show 10">
          </option></datalist>
        </div>
        </div>
  );
}

export default Users;
