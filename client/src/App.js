import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import browserHistory from './browserHistory';
import store from './store';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Articles from './Pages/Articles/Articles';
import History from './Pages/History/History';
import Map from './Pages/Map/Map';
import Auth from './Pages/Auth/AuthPage';
import Alert from './components/Alert';

function App(props) {
  // useEffect(() => {
  //   store.dispatch(getUser());
  // }, []);
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
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
