import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { setFighterOneRoundScore, setFighterTwoRoundScore } from '../../store/actions';
import RoundScorePicker from '../../components/RoundScorePicker';

const Scoring = ({
  fighterOneName,
  fighterTwoName,
  fightLength,
  fighterOneCurrentRound,
  fighterTwoCurrentRound,
  currentRound
}) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{fighterOneName} V {fighterTwoName}</Text>
    <Text>Round {currentRound} of {fightLength}</Text>
    <RoundScorePicker fighter={1} />
    <RoundScorePicker fighter={2} />
    <Button title="Score Round" onPress={() => navigation.navigate('FinalBell')} />
  </View>;

const mapStateToProps = ({
  fighterOneName,
  fighterTwoName,
  fightLength,
  fighterOneCurrentScore,
  fighterTwoCurrentScore,
  currentRound
}) =>
  ({
    fighterOneName,
    fighterTwoName,
    fightLength,
    fighterOneCurrentScore,
    fighterTwoCurrentScore,
    currentRound
  });

const mapDispatchToProps = dispatch => ({
  setFighterOneRoundScore: roundScoreOne => dispatch(setFighterOneRoundScore(roundScoreOne)),
  setFighterTwoRoundScore: roundScoreTwo => dispatch(setFighterTwoRoundScore(roundScoreTwo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);