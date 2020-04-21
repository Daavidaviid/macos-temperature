import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {}

export const Pressable: React.FC<Props> = (props) => {
  return <TouchableOpacity activeOpacity={0.8} {...props} />;
};
