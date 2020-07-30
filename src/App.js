//React dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/navigation/Navbar';

//Pages
import Home from './pages/home';
import Python from './pages/python';
import Webdev from './pages/webdev';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path="/home" component={Home} />
        <Route path="/python" component={Python} />
        <Route path="/webdev" component={Webdev} />
      </Switch>
    </div>
  );
}

export default App;
