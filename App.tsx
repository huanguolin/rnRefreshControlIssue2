/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useMemo, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1} from './src/Page1';
import {Page2} from './src/Page2';
import {mockFetchData, RefreshingContext} from './src/useGlobalData';

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
  const [refreshing, setRefreshing] = useState(false);

  const refetch = useCallback(async () => {
    try {
      setRefreshing(true);
      await mockFetchData();
    } catch (error) {
      // ignored error
    } finally {
      setRefreshing(false);
    }
  }, []);

  const refreshInitValue = useMemo(
    () => ({
      refreshing,
      refetch,
    }),
    [refetch, refreshing],
  );

  return (
    <RefreshingContext.Provider value={refreshInitValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
      </NavigationContainer>
    </RefreshingContext.Provider>
  );
}

export default App;
