import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { Button } from '@components';
import { i18n } from '@i18n';
import { Fan } from '@modules';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  useEffect(() => {
    Fan.initialize();
  }, []);

  const getFans = async () => {
    try {
      const fans = await Fan.getFans();
      console.log({ fans });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Écran principal</Text>
      </View>
      <View style={styles.content}>
        <Button label={i18n.main.seeTemp} onPress={getFans} />
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
