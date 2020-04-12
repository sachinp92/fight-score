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

export const setRounds = rounds => ({
  type: SET_ROUNDS,
  payload: rounds
});

export const setFighterOneName = name => ({
  type: SET_FIGHTER_ONE_NAME,
  payload: name
});

export const setFighterTwoName = name => ({
  type: SET_FIGHTER_TWO_NAME,
  payload: name
});

export const setFighterOneRoundScore = roundScore => ({
  type: SET_FIGHTER_ONE_ROUND_SCORE,
  payload: roundScore
});

export const setFighterTwoRoundScore = roundScore => ({
  type: SET_FIGHTER_TWO_ROUND_SCORE,
  payload: roundScore
});

export const scoreRoundForFighterOne = roundScore => ({
  type: SCORE_ROUND_FOR_FIGHTER_ONE,
  payload: roundScore
});

export const scoreRoundForFighterTwo = roundScore => ({
  type: SCORE_ROUND_FOR_FIGHTER_TWO,
  payload: roundScore
});

export const incrementRound = () => ({
  type: INCREMENT_ROUND,
});