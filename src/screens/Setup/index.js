import React from 'react';
import { View, Text, Button, TextInput, Picker, Platform } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import { setRound } from '../../store/actions';

const Setup = ({
  navigation,
  fighterOneName,
  fighterTwoName,
  fightLength,
  setRound
}) =>
  <View style={styles.container}>
    <Text>Enter Fight Details</Text>
    <TextInput placeholder="Fighter One Name" value={fighterOneName} />
    <Text>V</Text>
    <TextInput placeholder="Fighter Two Name" value={fighterTwoName} />

    {/* <TextInput placeholder="Number of Rounds" value={fightLength} keyboardType="numeric" /> */}
    <Text>Number of Rounds:</Text>
    <Picker
      selectedValue={fightLength}
      style={{ height: Platform.OS === 'ios' ? 150 : 50, width: 80 }}
      itemStyle={{height: 150}}
      onValueChange={selectedRound => setRound(selectedRound)}
    >
      <Picker.Item label="1" value={1} />
      <Picker.Item label="2" value={2} />
      <Picker.Item label="3" value={3} />
      <Picker.Item label="4" value={4} />
      <Picker.Item label="5" value={5} />
      <Picker.Item label="6" value={6} />
      <Picker.Item label="7" value={7} />
      <Picker.Item label="8" value={8} />
      <Picker.Item label="9" value={9} />
      <Picker.Item label="10" value={10} />
      <Picker.Item label="11" value={11} />
      <Picker.Item label="12" value={12} />
    </Picker>

    <Button title="Start Fight" onPress={() => navigation.navigate('Scoring')} />
  </View>;

const mapStateToProps = ({ fighterOneName, fighterTwoName, fightLength }) => ({ fighterOneName, fighterTwoName, fightLength });

const mapDispatchToProps = dispatch => ({
  setRound: selectedRound => dispatch(setRound(selectedRound)),
});

const SetupContainer = connect(mapStateToProps, mapDispatchToProps)(Setup);

export default SetupContainer;