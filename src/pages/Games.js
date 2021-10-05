import {React,useState} from 'react';
import "./Search.css";
import "./pagination.css";
import "./icon.css";
import "./table.css";
import "./modal.css";
import {FiPlay} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrPause,GrBarChart} from 'react-icons/gr'
import {GiAbstract003,GiBattleship,GiAutogun,GiCrossedSwords} from 'react-icons/gi'
import {CgPacman} from 'react-icons/cg'

function Games() {
    const [detail, setState] = useState(false)
  const showInfo = () => setState(!detail);

  const [leaderboard, setLB] = useState(false)
  const showLB = () => setLB(!leaderboard);
  return (
    <div>
    <input list="ice-cream-flavors" id="mySort" name="ice-cream-choice"  placeholder="  Product By"/>
      <datalist id="ice-cream-flavors">
        <option value="Admin">
        </option><option value="Developer">
        </option></datalist>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="   Search for ids, accounts.." />
       <button className="btn1">Add Game</button>
  <table>
      <tbody><tr>
        <th>ID</th>
          <th>Name of games</th>
          <th>Product By</th>
          <th>Total of players</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>GAME005</td>
          <td><GiBattleship size="30px" className="ava"/><a className="name">Battle Ship</a></td>
          <td>Admin</td>
          <td>10241</td>
          <td><FiPlay className="iconfont0" size="20px"/><GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} size="20px" className="iconfont2"/></td>
        </tr>
        <tr>
        <td>GAME006</td>
          <td><GiAbstract003 size="30px" className="ava"/><a className="name">Star War</a></td>
          <td>Admin</td>
          <td>12012</td>
          <td><FiPlay className="iconfont0" size="20px"/><GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
        </tr>
        <tr>
        <td>GAME007</td>
          <td><CgPacman size="30px" className="ava"/><a className="name">PacMan</a></td>
          <td>Developer</td>
          <td>29263</td>
          <td>  
          <a href="https://cdn.htmlgames.com/MsTapman/"><FiPlay className="iconfont0" size="20px"/></a>
          <GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
        </tr>
        <tr>
        <td>GAME008</td>
          <td><GiCrossedSwords size="30px" className="ava"/><a className="name">Warrior</a></td>
          <td>Developer</td>
          <td>8856</td>
          <td><FiPlay className="iconfont0" size="20px"/><GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
        </tr>
        <tr>
        <td>GAME009</td>
          <td><GiAutogun size="30px" className="ava"/><a className="name">GunKing</a></td>
          <td>Admin</td>
          <td>2543</td>
          <td><a href="https://www.w3schools.com/codegame/index.html"><FiPlay className="iconfont0" size="20px"/></a><GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
        </tr>
      </tbody></table>
      <div>
      <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-game" >
      <div className="close" onClick={showInfo}>+</div>
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <form action>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Arcade Game</td>
          </tr>
          <tr>
          <td>Producter</td>
            <td>Admin</td>
          </tr>
          <tr>
          <td>Tags</td>
            <td>Action, 18+</td>
          </tr>
          <tr>
          <td>Date</td>
            <td>dd/mm/yyyy</td>
          </tr>
          <tr>
          <td>Total players</td>
            <td>99999</td>
          </tr>
        </tbody></table>
      </form>
      <a className="button1">Edit</a>
    </div>
  </div>
  <div className="bg-modal" style={{display: leaderboard ? 'flex' : 'none' }}>
    <div className="modal-LB" >
      <div className="close" onClick={showLB}>+</div>
      <h1>LEADERBOARD</h1>
      <h3>GAME NAME</h3>
      <form action>
      <table>
        <tbody>
          <tr>
            <td>01</td>
            <td>User01</td>
            <td>102230</td>
          </tr>
          <tr>
          <td>02</td>
            <td>User02</td>
            <td>100832</td>
          </tr>
          <tr>
          <td>03</td>
            <td>User03</td>
            <td>99932</td>
          </tr>
          <tr>
          <td>04</td>
            <td>User04</td>
            <td>99160</td>
          </tr>
          <tr>
          <td>05</td>
            <td>User05</td>
            <td>98375</td>
          </tr>
          <tr>
            <td>06</td>
            <td>User06</td>
            <td>98312</td>
          </tr>
          <tr>
          <td>07</td>
            <td>User07</td>
            <td>98112</td>
          </tr>
          <tr>
          <td>08</td>
            <td>User08</td>
            <td>97132</td>
          </tr>
          <tr>
          <td>09</td>
            <td>User09</td>
            <td>96950</td>
          </tr>
          <tr>
          <td>10</td>
            <td>User10</td>
            <td>95666</td>
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

export default Games;
