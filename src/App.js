import './sass/_main.scss';
import Dashboard from './components/Dashboard';
import {Switch, Redirect, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Redirect to="/dashboard"/>
      <Switch>
        <Route exact to="/dashboard" render={() => <Dashboard/>} />
      </Switch>
    </div>
  );
}

export default App;
