import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { i18n } from '@i18n';
import { FanModule } from '@modules';
import { Fan, Button } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { setFans, GlobalState } from '@state';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const fans = useSelector((state: GlobalState) => state.fans);

  useEffect(() => {
    // let intervalId: any;

    const initialize = async () => {
      try {
        await FanModule.initialize();
        loadData();
        // intervalId = setInterval(loadData, 1000);
      } catch (error) {
        console.warn(error);
      }
    };

    initialize();

    return () => {
      FanModule.close();
      // clearInterval(intervalId);
    };
  }, []);

  const loadData = useCallback(async () => {
    try {
      const [fans, temperature] = await Promise.all([
        FanModule.getFans(),
        FanModule.getTemperature(),
      ]);
      dispatch(setFans(fans));
      console.log({ temperature });
    } catch (error) {
      console.warn(error);
    }
  }, [dispatch]);

  const askRights = async () => {
    try {
      FanModule.setRights();
    } catch (error) {
      console.warn(error);
    }
  };

  const renderFans = () => {
    return Object.keys(fans.Map)
      .filter((fanIndex) => !!fans.Map[fanIndex].rpm)
      .map((fanIndex) => <Fan key={`${fanIndex}`} fan={fans.Map[fanIndex]} />);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{i18n.main.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {renderFans()}
      </ScrollView>
      <Button style={styles.button} label="Refresh" onPress={loadData} />
      <Button style={styles.button} label="Ask rights" onPress={askRights} />
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
    paddingVertical: Dim.margins.d2,
  },
  button: {
    marginHorizontal: Dim.margins.d2,
    marginBottom: Dim.margins.d1,
  },
});
