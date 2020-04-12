import {
  SET_ROUNDS,
  SET_FIGHTER_ONE_NAME,
  SET_FIGHTER_TWO_NAME,
  SET_FIGHTER_ONE_ROUND_SCORE,
  SET_FIGHTER_TWO_ROUND_SCORE
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