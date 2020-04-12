import React from 'react';
import { View, Text } from 'react-native';
import TotalsDisplay from '../../components/TotalsDisplay';

const FinalBell = () =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Final Bell</Text>
    <TotalsDisplay />
  </View>;

export default FinalBell;