import {Box, HStack, Pressable, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import BackIconPrimary from '../assets/svg/BackIconPrimary';
import CloseIconPrimary from '../assets/svg/CloseIconPrimary';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {goBack} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
interface Props {
  title: string;
}
const CustomAppBar = (props: Props) => {
  return (
    <HStack style={styles.appBar}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable onPress={() => goBack()}>
        <CloseIconPrimary width={4} height={4} />
      </Pressable>
    </HStack>
  );
};
const styles = StyleSheet.create({
  appBar: {
    width: widthToDp(100),
    height: heightToDp(8),
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(22),
    fontWeight: '600',
    lineHeight: 32,
  },
});
export default CustomAppBar;
