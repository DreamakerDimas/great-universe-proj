import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Articles from './Pages/Articles/Articles';
import History from './Pages/History/History';
import Map from './Pages/Map/Map';
import Auth from './Pages/Auth/AuthPage';
import Alert from './components/Alert';
import TagsTreeEditor from './Pages/TagsTreeEditor/TagsTreeEditor';

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/history" component={History} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/auth" component={Auth} />
          {/* only for admin, moderator */}
          <Route exact path="/tagsEditor" component={TagsTreeEditor} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
