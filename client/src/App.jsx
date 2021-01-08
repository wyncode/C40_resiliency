import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Dashboard from './views/Dashboard';
import Maps from './views/Maps';
import TableList from './views/TableList';
import UserProfile from './views/UserProfile';
import Login from './pages/Login';
import UserSignup from './pages/UserSignup';
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/npsignup" component={NPSignup} />
          <Route exact path="/usersignup" component={UserSignup} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <PrivateRoute exact path="/userhome" component={UserHome} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="./views/dashboard" component={Dashboard} />
          <PrivateRoute exact path="./views/maps" component={Maps} />
          <PrivateRoute exact path="./views/tablelist" component={TableList} />
          <PrivateRoute
            exact
            path="./views/UserProfile"
            component={UserProfile}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
