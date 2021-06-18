import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRout';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
      <h1>Hello friens!</h1>
      <Switch>
      <PrivateRoute path="/friends" component={FriendsList} />

      <Route path="/login">
        <Login />
      </Route>

      <Route>
        <Login />
      </Route>

      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
