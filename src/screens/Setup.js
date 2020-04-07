import React from 'react';
import {View, Text, Button} from 'react-native';

const Setup = ({navigation: {navigate}}) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Setup</Text>
    <Button title="Start Fight" onPress={() => navigate('Scoring')} />
  </View>;

export default Setup;