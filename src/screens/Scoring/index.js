import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const Scoring = ({ navigation: { navigate }, fighterOneName, fighterTwoName, fightLength }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Fighter One: {fighterOneName}</Text>
    <Text>Fighter Two: {fighterTwoName}</Text>
    <Text>Fight Length: {fightLength}</Text>
    <Button title="Score Fight" onPress={() => navigate('FinalBell')} />
  </View>;

const mapStateToProps = ({ fighterOneName, fighterTwoName, fightLength }) => ({ fighterOneName, fighterTwoName, fightLength });

export default connect(mapStateToProps)(Scoring);