import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';

const StartFightButton = ({ fighterOneName, fighterTwoName, nextPage }) => {
  const checkBothNames = () => !(fighterOneName && fighterTwoName) ? alert('Please enter the name of both fighters') : nextPage();
  return (<Button title="Start Fight" onPress={() => checkBothNames()} />)
}

export default connect(({ fighterOneName, fighterTwoName }) => ({ fighterOneName, fighterTwoName }))(StartFightButton);