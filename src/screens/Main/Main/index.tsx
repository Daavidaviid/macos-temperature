import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran principal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    ...Fonts.title,
    backgroundColor: Colors.orange,
    paddingHorizontal: Dim.margins.d2,
    paddingVertical: Dim.margins.d1,
  },
});
