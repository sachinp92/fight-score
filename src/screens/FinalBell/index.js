import React from 'react';
import { View, Text } from 'react-native';

import TotalsDisplay from '../../components/TotalsDisplay';
import FighterNamesDisplay from '../../components/FighterNamesDisplay';
import ScoringGrid from '../../components/ScoringGrid';

const FinalBell = () =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Final Bell</Text>
    <FighterNamesDisplay />
    <TotalsDisplay />
    <ScoringGrid />
  </View>;

export default FinalBell;