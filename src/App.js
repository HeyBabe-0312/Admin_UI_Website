
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Games from "./pages/Games";
import Users from "./pages/Users";
import Developers from "./pages/Developers";
import Notification from "./pages/Notification";
import Info from "./pages/Info";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import Logout from "./pages/Logout";
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/games' component={Games} />
          <Route path='/developers' component={Developers} />
          <Route path='/users' component={Users} />
          <Route path='/notification' component={Notification} />
          <Route path='/info' component={Info} />
          <Route path='/logout' component={Logout} />
          <Route path='/setting' component={Setting} />
          <Route path='/support' component={Support} />
        </Switch>
    </Router>
    </>
  );
}

export default App;