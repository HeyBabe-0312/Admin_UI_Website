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
  var src1="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src2="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src3="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src4="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
    const [detail, setState] = useState(false)
  const showInfo = () => setState(!detail);

  const [leaderboard, setLB] = useState(false)
  const showLB = () => setLB(!leaderboard);
  
  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    document.getElementById('output1').src = document.getElementById('img1').src;
    document.getElementById('output2').src = document.getElementById('img2').src;
    document.getElementById('output3').src = document.getElementById('img3').src;
    document.getElementById('output4').src = document.getElementById('img4').src;
    setState(!detail);setEdit(!editform);
  };
  const setImg = () => {
    document.getElementById('img1').src = src1;
    document.getElementById('img2').src = src2;
    document.getElementById('img3').src = src3;
    document.getElementById('img4').src = src4;
    setEdit(!editform);
  };
  var showImg = function(event) {
    var output1 = document.getElementById('output1');
    var output2 = document.getElementById('output2');
    var output3 = document.getElementById('output3');
    var output4 = document.getElementById('output4');
    try {
      src1 = URL.createObjectURL(event.target.files[0]);
      output1.src = URL.createObjectURL(event.target.files[0]);
    } catch (error) {
       src1 = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
       output1.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
    }
    try {
      src2 = URL.createObjectURL(event.target.files[1]);
      output2.src = URL.createObjectURL(event.target.files[1]);
    } catch (error) {
       src2 = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
       output2.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
    }
    try {
      src3 = URL.createObjectURL(event.target.files[2]);
      output3.src = URL.createObjectURL(event.target.files[2]);
    } catch (error) {
       src3 = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
       output3.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
    }
    try {
      src4 = URL.createObjectURL(event.target.files[3]);
      output4.src = URL.createObjectURL(event.target.files[3]);
    } catch (error) {
       src4 = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
       output4.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
    }
  };
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
          <td><a href="https://www.addictinggames.com/embed/html5-games/23872"><FiPlay className="iconfont0" size="20px"/></a>
          <GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart onClick={showLB} className="iconfont1" size="20px"/><BsInfoCircle onClick={showInfo} className="iconfont2" size="20px"/></td>
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
      <img width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" id="img1" />
      <img width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" id="img2"/>
      <img width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" id="img3"/>
      <img width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" id="img4"/>
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
      <a className="button1"  onClick={showEdit}>Edit</a>
    </div>
  </div>
  <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
    <div className="modal-edit" >
      <div className="close" onClick={showEdit}>+</div>
      <form runat="server">
              <img alt="Image 1" id="output1"  width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
              <img alt="Image 2" id="output2"  width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
              <img alt="Image 3" id="output3"  width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
              <img alt="Image 4" id="output4"  width="100px" height="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
              <input accept="image/*" type='file' onChange={showImg} multiple/>
      </form> 
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">Name</td>
            <td className="no_border"><input type="text" id="name" name="name" required placeholder="Arcade Game" className="inputE"
       minlength="4" maxlength="20" size="35"/></td>
          </tr>
          <tr>
          <td className="no_border">Producter</td>
            <td className="no_border"> <input list="ice-cream-flavors" name="ice-cream-choice"  placeholder="Producter" className="inputE" size="35"/>
      <datalist id="ice-cream-flavors">
        <option value="Admin">
        </option><option value="Developer">
        </option></datalist></td>
          </tr>
          <tr>
          <td className="no_border">Tags</td>
            <td className="no_border"><input type="text" id="name" name="name" required placeholder="Action, 18+" className="inputE"
       minlength="4" size="35"/></td>
          </tr>
          <tr>
          <td className="no_border">Date</td>
            <td className="no_border"><input type="date" id="start" name="trip-start" size = "35"
       value="2021-10-21"
       min="2018-01-01" max="2022-12-31"></input></td>
          </tr>
          <tr>
          <td className="no_border">Iframe</td>
            <td className="no_border"><input type="search" id="site-search" name="q"
       aria-label="Search through site content" minlength="10" size="35" className="inputE" placeholder="https://cdn.htmlgames.com/MsTapman/"/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={setImg}>Save</a>
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
