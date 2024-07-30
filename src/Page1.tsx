import React, {useCallback, useEffect} from 'react';
import {
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useGlobalData} from './useGlobalData';
import {useNavigation} from '@react-navigation/native';

export const Page1: React.FC = () => {
  const nav = useNavigation();
  const {refetch, isFetching} = useGlobalData();

  const handlePress = useCallback(() => {
    nav.navigate('Page2');
  }, [nav]);

  useEffect(() => {
    console.log('===> isFetching: ', isFetching);
  }, [isFetching]);

  return (
    <SafeAreaView style={styles.contaienr}>
      <ScrollView
        style={styles.contaienr}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={isFetching}
            tintColor={'red'}
            style={styles.refreshing}
          />
        }>
        <Pressable style={styles.box} onPress={handlePress}>
          <Text>Goto Page2</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

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
