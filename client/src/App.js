import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Articles from './Pages/Articles/Articles';
import History from './Pages/History/History';
import Map from './Pages/Map/Map';
import Auth from './Pages/Auth/AuthPage';
import Alert from './components/Alert';

function App() {
  // useEffect(() => {
  //   store.dispatch(getUser());
  // }, []);

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
