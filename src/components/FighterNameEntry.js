import React from 'react';
import { Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { setFighterOneName, setFighterTwoName } from '../store/actions';

const FighterNameEntry = ({ fighterOneName, fighterTwoName, setFighterOneName, setFighterTwoName }) => <>
  <TextInput placeholder="Fighter Component One" value={fighterOneName} onChangeText={text => setFighterOneName(text)} />
  <Text>V</Text>
  <TextInput placeholder="Fighter Component Two" value={fighterTwoName} onChangeText={text => setFighterTwoName(text)} /></>;

const mapStateToProps = ({ fighterOneName, fighterTwoName }) => ({ fighterOneName, fighterTwoName });
const mapDispatchToProps = dispatch => ({
  setFighterOneName: nameOne => dispatch(setFighterOneName(nameOne)),
  setFighterTwoName: nameTwo => dispatch(setFighterTwoName(nameTwo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FighterNameEntry);