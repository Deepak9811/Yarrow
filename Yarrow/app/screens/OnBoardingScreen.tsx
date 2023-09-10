import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import BrandLogo from '../assets/svg/BrandLogo';
import OnBoardingImage from '../assets/svg/OnBoardingImage';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {navigate} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const OnBoardingScreen = () => {
  return (
    <View style={styles.mainView}>
      <OnBoardingImage width={100} height={40} />
      <View style={{position: 'absolute', top: -5, left: '25%'}}>
        <BrandLogo width={50} height={50} />
      </View>
      <View style={styles.innerView}>
        <View>
          <Text style={styles.heading}>Welcome to Yarrow</Text>
          <Text style={styles.description}>Your Space, On Demand</Text>
        </View>
        <View>
          <PrimaryButton
            onPress={() => navigate(Screens.login)}
            title={'Login'}
            width={widthToDp(75)}
            height={52}
            textFontSize={16}
          />
          <SecondaryButton
            onPress={() => navigate(Screens.signUp)}
            title={'Sign Up'}
            width={widthToDp(75)}
            marginTop={5}
            height={52}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  innerView: {
    paddingTop: 30,
    height: heightToDp(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    color: Colors.primaryText,
    fontFamily: Fonts.PoppinsBold,
    fontWeight: '600',
    lineHeight: 37.5,
    textAlign: 'center',
    fontSize: responsiveFontSize(25),
  },
  description: {
    color: Colors.secondaryText,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    lineHeight: 27.5,
    width: widthToDp(75),

    fontSize: responsiveFontSize(16),
    textAlign: 'center',
  },
});
export default OnBoardingScreen;
