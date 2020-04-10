import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';

const Setup = ({ navigation, currentRound, fightLength }) =>
  <View style={styles.container}>
    <Text>Round {currentRound} of {fightLength}</Text>
    <Button title="Start Fight" onPress={() => navigation.navigate('Scoring')} />
  </View>;

const mapStateTopProps = ({ currentRound, fightLength }) => ({ currentRound, fightLength });

const SetupContainer = connect(mapStateTopProps)(Setup);

export default SetupContainer;