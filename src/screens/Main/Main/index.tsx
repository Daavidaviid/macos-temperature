import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Dim } from '@constants';
import { i18n } from '@i18n';
import { FanModule } from '@modules';
import { Fan } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { setFans, GlobalState } from '@state';

interface Props {}

export const Main: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const fans = useSelector((state: GlobalState) => state.fans);

  useEffect(() => {
    const initialize = async () => {
      try {
        await FanModule.initialize();
        const fans = await FanModule.getFans();
        dispatch(setFans(fans));
      } catch (error) {
        console.warn(error);
      }
    };
    initialize();
  }, [dispatch]);

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
      <View style={styles.content}>{renderFans()}</View>
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
});
