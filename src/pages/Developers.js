import {React,useState} from 'react';
import "./Search.css";
import "./pagination.css";
import "./icon.css";
import "./table.css";
import "./modal.css";
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'

function Developers() {
  const [detail, setState] = useState(false)
  const showInfo = () => setState(!detail);
  return (
    <div>
      <input list="ice-cream-flavors" id="mySort" name="ice-cream-choice"  placeholder="  Sort By"/>
        <datalist id="ice-cream-flavors">
          <option value="Id">
          </option><option value="Name">
          </option><option value="Email">
          </option><option value="Num of games">
          </option></datalist>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="   Search for ids, accounts.." />
         <div></div>
    <table>
        <tbody><tr>
          <th>ID</th>
            <th>Developers</th>
            <th>Email</th>
            <th>Number of games</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>031200</td>
            <td><FaRegUserCircle size="30px" className="ava"/><a className="name">Ho Minh Hieu</a></td>
            <td>deveploper00000@gmail.com</td>
            <td>2</td>
            <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} size="20px" className="iconfont2"/>
            </td>
          </tr>
          <tr>
          <td>031201</td>
            <td><FaRegUserCircle size="30px" className="ava"/><a className="name">Le Trung Nghia</a></td>
            <td>deveploper00001@gmail.com</td>
            <td>1</td>
            <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>031202</td>
            <td><FaRegUserCircle size="30px" className="ava"/><a className="name">Nguyen Dang Tuan Kiet</a></td>
            <td>deveploper00002@gmail.com</td>
            <td>0</td>
            <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>031203</td>
            <td><FaRegUserCircle size="30px" className="ava"/><a className="name">Ma Hai Nhat</a></td>
            <td>deveploper00003@gmail.com</td>
            <td>1</td>
            <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
          <tr>
          <td>031204</td>
            <td><FaRegUserCircle size="30px" className="ava"/><a className="name">Bui Duy Phuong</a></td>
            <td>deveploper00004@gmail.com</td>
            <td>0</td>
            <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
          </tr>
        </tbody></table>
        <div>
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-dev" >
      <div className="close" onClick={showInfo}>+</div>
      <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
      <form action>
      <table>
        <tbody>
        <tr>
            <td>Id</td>
            <td>031200</td>
          </tr>
          <tr>
            <td>Account</td>
            <td>Nacker1412</td>
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
          <tr>
          <td>Product</td>
            <td>02</td>
          </tr>
        </tbody></table>
      </form>
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
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

export default Developers;
