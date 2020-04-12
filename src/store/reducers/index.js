import {
  SET_ROUNDS,
  SET_FIGHTER_ONE_NAME,
  SET_FIGHTER_TWO_NAME,
  SET_FIGHTER_ONE_ROUND_SCORE,
  SET_FIGHTER_TWO_ROUND_SCORE,
  INCREMENT_ROUND,
  SCORE_ROUND_FOR_FIGHTER_ONE,
  SCORE_ROUND_FOR_FIGHTER_TWO
} from '../constants';

const initialState = {
  fighterOneName: '',
  fighterTwoName: '',
  fighterOneRoundScores: [],
  fighterTwoRoundScores: [],
  fighterOneTotal: 0,
  fighterTwoTotal: 0,
  fighterOneCurrentRound: 10,
  fighterTwoCurrentRound: 8,
  currentRound: 1,
  fightLength: 5
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROUNDS: return { ...state, fightLength: payload };
    case SET_FIGHTER_ONE_NAME: return { ...state, fighterOneName: payload };
    case SET_FIGHTER_TWO_NAME: return { ...state, fighterTwoName: payload };
    case SET_FIGHTER_ONE_ROUND_SCORE: return { ...state, fighterOneCurrentRound: payload };
    case SET_FIGHTER_TWO_ROUND_SCORE: return { ...state, fighterTwoCurrentRound: payload };
    case SCORE_ROUND_FOR_FIGHTER_ONE: return { ...state, fighterOneRoundScores: state.fighterOneRoundScores.concat(payload) };
    case SCORE_ROUND_FOR_FIGHTER_TWO: return { ...state, fighterTwoRoundScores: state.fighterTwoRoundScores.concat(payload) };
    case INCREMENT_ROUND: return { ...state, currentRound: state.currentRound + 1 };
    default: return state;
  }
};

export default reducer;