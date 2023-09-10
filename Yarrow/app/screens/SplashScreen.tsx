import database from '@react-native-firebase/database';
import {StackActions} from '@react-navigation/native';
import {View} from 'native-base';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import SplashLogo from '../assets/svg/SplashLogo';
import {heightToDp, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {getEmail} from '../helpers/storage';
import {store} from '../store';

const SplashScreen = (props: any) => {
  useEffect(() => {
    database()
      .ref('users')
      .once('value')
      .then(async (snapshot: any) => {
        const e = await getEmail();
        console.log('email', e);
        // setEmail(e);
        // console.log('splash screen:->> ', snapshot.val());
        if (snapshot.val()) {
          const resp = Object.values(snapshot.val());
          // console.log(resp);
          const resp1 = Object.keys(snapshot.val());

          const profile: any = resp.find((x: any) => x.email === e);

          if (profile) {
            store.updatePaymentType(profile.paymentType);
            props.navigation.dispatch(StackActions.replace(Screens.bottomTab));
          } else {
            props.navigation.dispatch(StackActions.replace(Screens.onBoarding));
            // props.navigation.navigate(Screens.onBoarding);
          }
        } else {
          props.navigation.dispatch(StackActions.replace(Screens.onBoarding));
        }
      });
  }, []);

  return (
    <ImageBackground
      resizeMethod="resize"
      source={require('../assets/images/splashBackground.png')}
      style={styles.backgroundImage}>
      <View alignSelf={'center'} height={widthToDp(70)}>
        <SplashLogo height={40} width={40} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    height: heightToDp(100),
    width: widthToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
