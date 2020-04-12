import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';

import { incrementRound } from '../store/actions';

const RoundScoreButton = ({ nextPage, currentRound, fightLength, incrementRound }) => {
  const scoreRound = () => incrementRound();
  const checkRound = () => currentRound === fightLength ? nextPage() : scoreRound();

  return (<Button title="Score Round" onPress={() => checkRound()} />);
};

const mapDispatchToProps = dispatch => ({ incrementRound: () => dispatch(incrementRound()) });

export default connect(({ currentRound, fightLength }) => ({ currentRound, fightLength }), mapDispatchToProps)(RoundScoreButton);