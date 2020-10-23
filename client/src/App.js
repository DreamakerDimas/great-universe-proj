import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import History from './Pages/History';
import Map from './Pages/Map';
import Auth from './Pages/Auth';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/history' component={History} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/auth' component={Auth} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
