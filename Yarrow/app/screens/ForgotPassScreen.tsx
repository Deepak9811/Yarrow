import database from '@react-native-firebase/database';
import {StackActions} from '@react-navigation/native';
import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import AppLoader from '../components/AppLoader';
import AuthAppBar from '../components/AuthAppBar';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import {messages} from '../helpers/messages';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {storeEmail} from '../helpers/storage';
import {navigate} from '../services/navigationRef';
import {store} from '../store';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';
import SuccessScreen from './SuccessScreen';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const ForgotPassScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureOldPassword, setSecureOldPassword] = useState(true);
  const [secureRePassword, setSecureRePassword] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [profileKey, setProfileKey] = useState<any>([]);
  const [successReg, setSuccessReg] = useState(true);

  useEffect(() => {
    setLoading(true);

    database()
      .ref('users')
      .once('value')
      .then((snapshot: any) => {
        console.log('snapshot :->> ', Object.values(snapshot.val()));
        if (snapshot.val()) {
          const resp = Object.values(snapshot.val());
          const resp1 = Object.keys(snapshot.val());
          console.log(resp);
          console.log('resp1 :-> ', resp1);
          setUsers(resp);
          setProfileKey(resp1);
        }
        setLoading(false);
      });
  }, []);

  const updatePass = async () => {
    setLoading(true);
    const e = email.trim();
    const old = oldPassword.trim();
    const pass = password.trim();
    const confirmPass = rePassword.trim();

    // const find = users.find(x => x.password === old);

    const emailFind: any = users
      ? users.find((val: any) => val.email === e)
      : undefined;

    const passFind: any = users
      ? users.find((val: any) => val.password === old)
      : undefined;

    const index = users.indexOf(emailFind);
    // console.log('find', profileKey[index], ' , ', passFind);

    if (!emailFind || !passFind) {
      // Alert.alert(
      //   'Alert!',
      //   'Please enter correct credentials.',
      //   [{text: 'Ok'}],
      //   {cancelable: true},
      // );
      notifyToast('Please enter correct credentials.');
      setLoading(false);
      return;
    }

    if (pass.length >= 5 && confirmPass.length >= 5) {
      if (pass !== confirmPass) {
        // Alert.alert(
        //   '',
        //   'Please make sure your passwords match.',
        //   [{text: 'Ok'}],
        //   {cancelable: true},
        // );

        notifyToast('Please make sure your passwords match.');
        setLoading(false);
        return;
      }
    } else {
      // Alert.alert(
      //   'Alert!',
      //   'Password is too short(must be at least 6 characters',
      //   [{text: 'Ok'}],
      //   {cancelable: true},
      // );
      notifyToast('Password is too short(must be at least 5 characters.');
      setLoading(false);
      return;
    }

    database()
      .ref('users')
      .child(profileKey[index])
      .update({
        // profilePic: emailFind.profilePic,
        // name: emailFind.name,
        // address: emailFind.address,
        // phoneNumber: emailFind.phoneNumber,
        // email: emailFind.email,
        // isPayment: emailFind.isPayment,
        // createdOn: emailFind.createdOn,
        password: confirmPass,
      })
      .then(resp => {
        console.log('resp :->> ', resp);

        // Alert.alert('', 'Password update successfully.', [{text: 'Ok'}], {
        //   cancelable: true,
        // });
        setSuccessReg(false);
        setLoading(false);
      })
      .catch(error => {
        Alert.alert(
          'Error!',
          'There has been a problem with your credentials. Please try again.',
          [{text: 'Ok'}],
          {cancelable: true},
        );
        setLoading(false);
      });

    // props.navigation.dispatch(StackActions.replace(Screens.login));
    setLoading(false);
  };

  return (
    <>
      {successReg ? (
        <SafeAreaView style={styles.fullScreen}>
          <AuthAppBar />
          <View style={styles.mainView}>
            <Text style={styles.mainHeading}>Forgot password?</Text>

            <View mt={1}>
              <View style={{marginTop: 20}}>
                <EmailInput
                  value={email}
                  onChange={(text: string) => {
                    setEmail(text);
                  }}
                />
              </View>

              <PasswordInput
                value={oldPassword}
                onChange={(text: string) => {
                  setOldPassword(text);
                }}
                marginTop={5}
                secureText={secureOldPassword}
                onPressUnsecure={() => {
                  setSecureOldPassword(!secureOldPassword);
                }}
                placeHolder={'Old Password'}
              />
              <PasswordInput
                value={password}
                onChange={(text: string) => {
                  setPassword(text);
                }}
                marginTop={5}
                secureText={securePassword}
                onPressUnsecure={() => {
                  setSecurePassword(!securePassword);
                }}
                placeHolder={'New Password'}
              />

              <PasswordInput
                value={rePassword}
                onChange={(text: string) => {
                  setRePassword(text);
                }}
                marginTop={5}
                secureText={secureRePassword}
                onPressUnsecure={() => {
                  setSecureRePassword(!secureRePassword);
                }}
                placeHolder={'Confirm Password'}
              />

              <PrimaryButton
                height={52}
                onPress={async () => {
                  updatePass();
                  return;
                  const e = email.trim();
                  const p = password.trim();
                  if (e && p) {
                    console.log(users);
                    const x: any = users
                      ? users.find((val: any) => val.email === e)
                      : undefined;

                    if (!x) {
                      return;
                    }
                    console.log(x, x.password, p);
                    if (x.email === e && x.password === p) {
                      await storeEmail(e);
                      store.updatePaymentType(x.paymentType);
                      props.navigation.dispatch(
                        StackActions.replace(Screens.bottomTab),
                      );
                    } else {
                      notifyToast(messages.invalidCredentials);
                    }
                  } else {
                    notifyToast(messages.requiredFieldsMissing);
                  }
                }}
                title={'Update'}
                width={widthToDp(85)}
                marginTop={5}
                textFontSize={16}
              />
            </View>
          </View>
          {loading && <AppLoader />}
        </SafeAreaView>
      ) : (
        <>
          <SuccessScreen navigate={props.navigation} />
        </>
      )}
    </>
  );
};
export default ForgotPassScreen;
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
    marginLeft: 20,
    marginTop: 20,
  },
  forgotText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    marginTop: 20,
    color: Colors.primary,
  },
});
