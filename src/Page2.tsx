import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {KEY} from './useGlobalData';

export const Page2: React.FC = () => {
  const nav = useNavigation();
  const queryClient = useQueryClient();

  const handlePress = useCallback(() => {
    queryClient.invalidateQueries({queryKey: [KEY]});
    nav.navigate('Page1');
  }, [queryClient, nav]);

  return (
    <SafeAreaView style={styles.contaienr}>
      <ScrollView style={styles.contaienr}>
        <Pressable style={styles.box} onPress={handlePress}>
          <Text>Press to Refresh and Go Back</Text>
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
