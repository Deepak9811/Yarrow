import database from '@react-native-firebase/database';
import {StackActions} from '@react-navigation/native';
import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';

import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

import SuccessTick from '../assets/svg/successTick';

const SuccessScreen = (props: any) => {
  console.log('props :->> ', props);
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SuccessTick width={80} height={80} />
      </View>
      <View style={styles.mainView}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.mainHeading}>Password Updated</Text>
          <Text style={styles.mainHeading}>Successfully</Text>
        </View>
        <View mt={1}>
          <PrimaryButton
            height={52}
            onPress={async () => {
              props.navigate.dispatch(StackActions.replace(Screens.login));
            }}
            title={'Go to Login'}
            width={widthToDp(85)}
            marginTop={5}
            textFontSize={16}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SuccessScreen;
const styles = StyleSheet.create({
  fullScreen: {
    width: widthToDp(100),
    height: heightToDp(100),
    backgroundColor: Colors.white,
  },
  mainHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(26),
    lineHeight: 38,
    fontWeight: '500',
    color: Colors.primaryText,
  },
  secondaryHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    lineHeight: 27,
    fontWeight: '400',
    color: Colors.primaryText,
  },
  mainView: {
    // marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    marginTop: 20,
    color: Colors.primary,
  },
});
