import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import EmptyState from '../assets/svg/EmptyState';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

interface Props {
  text: string;
  height: number;
  width: number;
  marginTop: number;
}
const EmptyStateComponent = (props: Props) => {
  const {text} = props;
  return (
    <View style={styles.mainContainer} mt={props.marginTop}>
      <EmptyState height={props.height} width={props.width} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyStateComponent;
const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.secondaryText,
    textAlign: 'center',
  },
  mainContainer: {
    // marginTop: heightToDp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
