import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import { setRound, setFighterOneName, setFighterTwoName } from '../../store/actions';
import RoundPicker from '../../components/RoundPicker';
import StartFightButton from '../../components/StartFightButton';

const Setup = ({ navigation, fighterOneName, fighterTwoName, setFighterOneName, setFighterTwoName }) =>
  <View style={styles.container}>
    <Text>Enter Fight Details</Text>
    <TextInput placeholder="Fighter One Name" value={fighterOneName} onChangeText={text => setFighterOneName(text)} />
    <Text>V</Text>
    <TextInput placeholder="Fighter Two Name" value={fighterTwoName} onChangeText={text => setFighterTwoName(text)} />
    <Text>Number of Rounds:</Text>
    <RoundPicker />
    <StartFightButton fighterOne={fighterOneName} fighterTwo={fighterTwoName} startFight={() => navigation.navigate('Scoring')} />
  </View>;

const mapStateToProps = ({ fighterOneName, fighterTwoName, fightLength }) => ({ fighterOneName, fighterTwoName, fightLength });

const mapDispatchToProps = dispatch => ({
  setRound: selectedRound => dispatch(setRound(selectedRound)),
  setFighterOneName: nameOne => dispatch(setFighterOneName(nameOne)),
  setFighterTwoName: nameTwo => dispatch(setFighterTwoName(nameTwo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setup);