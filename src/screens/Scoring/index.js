import React from 'react';
import { View, Text, Button } from 'react-native';

const Scoring = ({ navigation: { navigate } }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Scoring</Text>
    <Button title="Score Fight" onPress={() => navigate('FinalBell')} />
  </View>;

export default Scoring;