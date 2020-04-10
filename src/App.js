import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducers';
import Router from './Router';

const initialState = {
  fighterOneName: '',
  fighterTwoName: '',
  fighterOneRoundScore: 0,
  fighterTwoRoundScore: 0,
  fighterOneTotal: 0,
  fighterTwoTotal: 0,
  currentRound: 1,
  fightLength: 12
};

const store = createStore(reducer, initialState);

const App = () => <Provider store={store}><Router /></Provider>;

export default App;