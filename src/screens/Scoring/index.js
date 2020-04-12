import React from 'react';
import { View } from 'react-native';

import styles from './style';
import RoundScorePicker from '../../components/RoundScorePicker';
import FighterNamesDisplay from '../../components/FighterNamesDisplay';
import FightRoundDisplay from '../../components/FightRoundDisplay';
import RoundScoreButton from '../../components/RoundScoreButton';
import ScoringGrid from '../../components/ScoringGrid';
import TotalsDisplay from '../../components/TotalsDisplay';

const Scoring = ({ navigation: { navigate } }) =>
  <View style={styles.container}>
    <ScoringGrid />
    <FighterNamesDisplay />
    <TotalsDisplay />
    <FightRoundDisplay />
    <RoundScorePicker fighter={1} />
    <RoundScorePicker fighter={2} />
    <RoundScoreButton nextPage={() => navigate('FinalBell')} />
  </View>;

export default Scoring;