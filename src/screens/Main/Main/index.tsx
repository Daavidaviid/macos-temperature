import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { Button } from '@components';
import { i18n } from '@i18n';
import { Temperature } from '@modules';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const getTemp = () => {
    Temperature.getTemperatures({
      message: 'David',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Écran principal</Text>
      </View>
      <View style={styles.content}>
        <Button label={i18n.main.seeTemp} onPress={getTemp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.orange,
    height: '10%',
    minHeight: 45,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.title,
    backgroundColor: Colors.orange,
    paddingHorizontal: Dim.margins.d2,
    paddingVertical: Dim.margins.d1,
  },
  content: {
    padding: Dim.margins.d2,
  },
});
