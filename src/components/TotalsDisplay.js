import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const TotalsDisplay = ({ fighterOneRoundScores, fighterTwoRoundScores }) =>
  <Text>{fighterOneRoundScores.reduce((acc, cur) => acc + cur, 0)} {fighterTwoRoundScores.reduce((acc, cur) => acc + cur, 0)}</Text>;

export default connect(({ fighterOneRoundScores, fighterTwoRoundScores }) => ({ fighterOneRoundScores, fighterTwoRoundScores }))(TotalsDisplay);