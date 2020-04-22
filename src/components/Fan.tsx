import React, { useCallback } from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { Fan as FanType, FanModule } from '@modules';
import { i18n } from '@i18n';
import { useDispatch } from 'react-redux';
import { setFanRPM } from '@state';

interface Props {
  fan: FanType;
}

export const Fan: React.FC<Props> = ({ fan }) => {
  const dispatch = useDispatch();

  const onValueChange = useCallback(
    (value: number) => {
      const rpm = Math.round(value);
      dispatch(setFanRPM(rpm, fan.index));
    },
    [dispatch, fan.index]
  );

  const onSlidingComplete = useCallback(
    (value: number) => {
      const rpm = Math.round(value);
      FanModule.setFanSpeed({
        rpm,
        fanIndex: fan.index,
      });
    },
    [fan.index]
  );

  return (
    <View key={`fan_${fan.index}`} style={styles.container}>
      <Text style={styles.name}>{fan.description}</Text>
      <View style={styles.row}>
        <Text style={styles.text}>{i18n.main.maxSpeed}</Text>
        <Text style={styles.value}>{fan.maxSpeed}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{i18n.main.minSpeed}</Text>
        <Text style={styles.value}>{fan.minSpeed}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{i18n.main.rpm}</Text>
        <Text style={styles.value}>{fan.rpm}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{i18n.main.fanIndex}</Text>
        <Text style={styles.value}>{fan.index}</Text>
      </View>
      <Slider
        value={fan.rpm}
        minimumValue={fan.minSpeed}
        maximumValue={fan.maxSpeed}
        minimumTrackTintColor={Colors.slider}
        maximumTrackTintColor={Colors.slider}
        {...{ onSlidingComplete, onValueChange }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingHorizontal: Dim.margins.d2,
  },
  name: {
    ...Fonts.title,
    paddingBottom: Dim.margins.d2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Dim.margins.d1,
  },
  text: {
    ...Fonts.standard,
  },
  value: {
    ...Fonts.standard,
    fontWeight: '400',
  },
});
