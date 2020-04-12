import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import FightLengthPicker from '../../components/FightLengthPicker';
import FighterNameEntry from '../../components/FighterNameEntry';
import StartFightButton from '../../components/StartFightButton';

const Setup = ({ navigation: {navigate} }) =>
  <View style={styles.container}>
    <Text>Enter Fight Details</Text>
    <FightLengthPicker />
    <FighterNameEntry />
    <StartFightButton nextPage={() => navigate('Scoring')} />
  </View>;

export default Setup;