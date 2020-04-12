import React from 'react';
import { Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';

import { setFighterOneRoundScore, setFighterTwoRoundScore } from '../store/actions';

const RoundScorePicker = ({ fighter, setFighterOneRoundScore, setFighterTwoRoundScore, fighterOneCurrentRound, fighterTwoCurrentRound }) =>
  <Picker
    selectedValue={fighter === 1 ? fighterOneCurrentRound : fighterTwoCurrentRound}
    style={{ height: Platform.OS === 'ios' ? 150 : 20, width: 100 }}
    itemStyle={{ height: 150 }}
    onValueChange={fighter === 1 ?
      fighterOneScore => setFighterOneRoundScore(fighterOneScore) :
      fighterTwoScore => setFighterTwoRoundScore(fighterTwoScore)
    }>
    <Picker.Item label="6" value={6} />
    <Picker.Item label="7" value={7} />
    <Picker.Item label="8" value={8} />
    <Picker.Item label="9" value={9} />
    <Picker.Item label="10" value={10} />
  </Picker>;

const mapStateToProps = ({ fighterOneCurrentRound, fighterTwoCurrentRound }) => ({ fighterOneCurrentRound, fighterTwoCurrentRound });
const mapDispatchToProps = dispatch => ({
  setFighterOneRoundScore: roundScore => dispatch(setFighterOneRoundScore(roundScore)),
  setFighterTwoRoundScore: roundScore => dispatch(setFighterTwoRoundScore(roundScore))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundScorePicker);