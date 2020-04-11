import { SET_ROUND, SET_FIGHTER_ONE_NAME, SET_FIGHTER_TWO_NAME } from '../types';

const initialState = {
  fighterOneName: '',
  fighterTwoName: '',
  fighterOneRoundScores: [],
  fighterTwoRoundScores: [],
  fighterOneTotal: 0,
  fighterTwoTotal: 0,
  currentRound: 1,
  fightLength: 12
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROUND: return { ...state, fightLength: payload };
    case SET_FIGHTER_ONE_NAME: return { ...state, fighterOneName: payload };
    case SET_FIGHTER_TWO_NAME: return { ...state, fighterTwoName: payload };
    default: return state;
  }
};

export default reducer;