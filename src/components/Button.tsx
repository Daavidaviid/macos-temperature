import React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { Colors, Dim, Fonts } from '@constants';
import { Pressable } from '@components';

interface Props {
  label: string;
  onPress: () => any;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<Props> = ({ label, onPress, style }) => {
  return (
    <Pressable {...{ onPress }} style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: Dim.margins.d1,
    paddingHorizontal: Dim.margins.d2,
    borderRadius: Dim.borderRadius.r1,
  },
  label: {
    ...Fonts.caption,
    color: Colors.white,
  },
});
