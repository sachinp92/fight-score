import React from 'react';
import { Picker, Platform, Text } from 'react-native';
import { connect } from 'react-redux';

import { setRounds } from '../store/actions';

const FightLengthPicker = ({ setRounds, fightLength }) => <>
<Text>Number of Rounds:</Text>
  <Picker
    selectedValue={fightLength}
    style={{ height: Platform.OS === 'ios' ? 150 : 20, width: 100 }}
    itemStyle={{ height: 150 }}
    onValueChange={numberOfRounds => setRounds(numberOfRounds)}
  >
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
  </Picker></>;

const mapStateToProps = ({ fightLength }) => ({ fightLength });
const mapDispatchToProps = dispatch => ({ setRounds: numberOfRounds => dispatch(setRounds(numberOfRounds)) });

export default connect(mapStateToProps, mapDispatchToProps)(FightLengthPicker);