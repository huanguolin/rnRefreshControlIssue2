/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1} from './src/Page1';
import {Page2} from './src/Page2';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/useData';

export type StackParamsList = {
  Page1: undefined;
  Page2: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}

const Stack = createStackNavigator<StackParamsList>();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
