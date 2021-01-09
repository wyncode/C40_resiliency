import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Dashboard from './views/Dashboard';
import Maps from './views/Maps';
import TableList from './views/TableList';
import UserProfile from './views/UserProfile';
import Login from './pages/Login';
import UserSignupRequest from './pages/UserSignupRequest';
import UserSignupInfo from './pages/UserSignupInfo';
import NPSignup from './pages/NPSignup';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/usersignupinfo" component={UserSignupInfo} />
          <Route exact path="/npsignup" component={NPSignup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />

          <Route
            exact
            path="/usersignuprequest"
            component={UserSignupRequest}
          />

          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/profile" component={Profile} />

          <Route exact path="/maps" component={Maps} />
          <Route exact path="/tablelist" component={TableList} />
          <Route exact path="/userprofile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
