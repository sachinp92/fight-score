import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';

import { incrementRound, scoreRoundForFighterOne, scoreRoundForFighterTwo } from '../store/actions';

const RoundScoreButton = ({
  nextPage,
  currentRound,
  fightLength,
  incrementRound,
  scoreRoundForFighterOne,
  scoreRoundForFighterTwo,
  fighterTwoCurrentRound,
  fighterOneCurrentRound
}) => {
  const scoreRound = () => {
    scoreRoundForFighterOne(fighterOneCurrentRound);
    scoreRoundForFighterTwo(fighterTwoCurrentRound);
    incrementRound();
    if (currentRound === fightLength) nextPage();
  };

  return (<Button title="Score Round" onPress={() => scoreRound()} />);
};

const mapStateToProps = ({ currentRound, fightLength, fighterOneCurrentRound, fighterTwoCurrentRound }) =>
  ({ currentRound, fightLength, fighterOneCurrentRound, fighterTwoCurrentRound });

const mapDispatchToProps = dispatch => ({
  incrementRound: () => dispatch(incrementRound()),
  scoreRoundForFighterOne: fighterOneCurrentRound => dispatch(scoreRoundForFighterOne(fighterOneCurrentRound)),
  scoreRoundForFighterTwo: fighterTwoCurrentRound => dispatch(scoreRoundForFighterTwo(fighterTwoCurrentRound))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundScoreButton);