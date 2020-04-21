import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '@constants';

interface Props {}

export const DefaultLayout: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>DefaultLayout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
