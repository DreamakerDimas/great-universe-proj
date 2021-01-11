import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import History from './Pages/History';
import Map from './Pages/Map';
import Auth from './Pages/Auth';
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import { getUser } from './actions/auth';
import Alert from './components/Alert';

if (localStorage.token) {
  setAuthToken(localStorage.token); // Need to Fix: Not work after second page reload
  console.log(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/history" component={History} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
