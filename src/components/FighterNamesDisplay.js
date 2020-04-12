import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const FighterNamesDisplay = ({ fighterOneName, fighterTwoName }) => <Text>{fighterOneName} V {fighterTwoName}</Text>;

export default connect(({ fighterOneName, fighterTwoName }) => ({ fighterOneName, fighterTwoName }))(FighterNamesDisplay);