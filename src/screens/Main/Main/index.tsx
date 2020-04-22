import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { i18n } from '@i18n';
import { FanModule, Fan } from '@modules';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const [fans, setFans] = useState<Fan[]>();

  useEffect(() => {
    const initialize = async () => {
      try {
        const res = await FanModule.initialize();
        console.log({ res });
        const fans = await FanModule.getFans();
        setFans(fans);
        console.log({ fans });
      } catch (error) {
        console.warn(error);
      }
    };
    initialize();
  }, []);

  const onSlidingComplete = (fanIndex: number) => () => {
    // TODO
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{i18n.main.title}</Text>
      </View>
      <View style={styles.content}>
        {fans
          ?.filter((fan) => !!fan.rpm)
          .map((fan, index) => (
            <View key={`fan_${index}`}>
              <Text>{fan.description}</Text>
              <Text>{fan.maxSpeed}</Text>
              <Text>{fan.minSpeed}</Text>
              <Text>{fan.rpm}</Text>
              <Slider
                minimumValue={fan.minSpeed}
                maximumValue={fan.maxSpeed}
                minimumTrackTintColor={Colors.red}
                maximumTrackTintColor={Colors.green}
                onSlidingComplete={onSlidingComplete(index)}
              />
            </View>
          ))}
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
    color: Colors.white,
  },
  content: {
    padding: Dim.margins.d2,
  },
});
