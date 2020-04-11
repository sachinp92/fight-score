import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Setup from './screens/Setup';
import FinalBell from './screens/FinalBell';
import Scoring from './screens/Scoring';
import StartFightButton from './components/StartFightButton';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="StartFightButton" component={StartFightButton} />
        <Stack.Screen name="Scoring" component={Scoring} />
        <Stack.Screen name="FinalBell" component={FinalBell} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;