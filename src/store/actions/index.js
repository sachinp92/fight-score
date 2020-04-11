import { SET_ROUND, SET_FIGHTER_ONE_NAME, SET_FIGHTER_TWO_NAME } from '../types';

export const setRound = round => ({
  type: SET_ROUND,
  payload: round
});

export const setFighterOneName = name => ({
  type: SET_FIGHTER_ONE_NAME,
  payload: name
});

export const setFighterTwoName = name => ({
  type: SET_FIGHTER_TWO_NAME,
  payload: name
});