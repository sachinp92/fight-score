import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const RoundScores = ({ fighterOneName, fighterTwoName, fighterOneRoundScores, fighterTwoRoundScores, fightLength }) => {
  const fighterOneTotal = fighterOneRoundScores.reduce((acc, cur) => acc + cur, 0);
  const fighterTwoTotal = fighterTwoRoundScores.reduce((acc, cur) => acc + cur, 0);
  return (<View>
    
  </View>);
};

const mapStateToProps = ({
  fighterOneName,
  fighterTwoName,
  fighterOneRoundScores,
  fighterTwoRoundScores,
  fightLength }) =>
  ({
    fighterOneName,
    fighterTwoName,
    fighterOneRoundScores,
    fighterTwoRoundScores,
    fightLength
  });

export default connect(mapStateToProps)(RoundScores);