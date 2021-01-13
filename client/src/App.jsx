import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Dashboard2 from './views/Dashboard';
import Maps from './views/Maps';
import TableList from './views/TableList';
import NGOProfile from './views/NGOProfile';
import Login from './pages/Login';
import UserSignup from './pages/UserSignup';
import NGOSignup from './pages/NGOSignup';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import Home2 from './views/Map/Home';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/usersignup" component={UserSignup} />
          <Route exact path="/ngosignup" component={NGOSignup} />
          <Route exact path="/dashboard2" component={Dashboard2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/tablelist" component={TableList} />
          <Route exact path="/ngoprofile" component={NGOProfile} />
          <div>
            <Route exact path="/pleasework" component={Home2} />
          </div>
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
