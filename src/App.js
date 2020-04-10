import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducers';
import Router from './Router';

const App = () =>
  <Provider store={createStore(reducer)}>
    <Router />
  </Provider>;

export default App;