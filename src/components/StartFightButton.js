import React from 'react';
import { Button } from 'react-native';

const StartFightButton = ({ fighterOne, fighterTwo, startFight }) => {
  const checkBothNames = () => !(fighterOne && fighterTwo) ? alert('Please enter the name of both fighters') : startFight();
  return (<Button title="Start Fight" onPress={() => checkBothNames()} />)
}

export default StartFightButton;