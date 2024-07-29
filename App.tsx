/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useGlobalData} from './useGlobalData';

function App(): JSX.Element {
  const {refetch, refreshing} = useGlobalData();

  return (
    <SafeAreaView style={styles.contaienr}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <ScrollView
        style={styles.contaienr}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={refreshing}
            tintColor={'red'}
            style={styles.refreshing}
          />
        }>
        <Pressable style={styles.box} onPress={refetch}>
          <Text>Press to Refresh</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  refreshing: {
    backgroundColor: '#444',
  },
  box: {
    position: 'absolute',
    top: 300,
    height: 100,
    left: 0,
    right: 0,
    margin: 15,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
