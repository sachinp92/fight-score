import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const TotalsDisplay = ({ fighterOneName, fighterTwoName }) =>
  <Text>{fighterOneName} {fighterTwoName}</Text>;

export default connect(({ fighterOneName, fighterTwoName }) => ({ fighterOneName, fighterTwoName }))(TotalsDisplay);