import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {StackActions} from '@react-navigation/native';
import {Input, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppLoader from '../components/AppLoader';
import AuthAppBar from '../components/AuthAppBar';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import {messages} from '../helpers/messages';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const SignUpScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [sendOtp, setSendOtp] = useState(false);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

  const [securePassword, setSecurePassword] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [secureRePassword, setSecureRePassword] = useState(true);
  const [rePassword, setRePassword] = useState('');

  const signInWithMobileNumber = async (phoneNumber: string) => {
    if (phoneNumber) {
      setLoading(true);
      // const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      // console.log('confirmation :->> ', confirmation);
      // setConfirm(confirmation);

      await auth()
        .signInWithPhoneNumber(phoneNumber)
        .then(resp => {
          console.log('confirmation :->> ', resp);
          setConfirm(resp);
          notifyToast('OTP sent to your phone number');
          // Alert.alert(
          //   'Alert!',
          //   'OTP sent to your phone number.',
          //   [{text: 'Ok'}],
          //   {
          //     cancelable: true,
          //   },
          // );
        })
        .catch(error => {
          console.log('error :->> ', error);
          Alert.alert(
            'Alert!',
            'Format of the mobile number is not supported. Please check your phone number or enter with your country code.',
            [{text: 'Ok'}],
            {cancelable: true},
          );
        });
      // setConfirm(confirmation);

      setLoading(false);
    } else {
      notifyToast('please enter phone Number');
    }
  };

  const confirmCode = async () => {
    if (confirm) {
      try {
        await confirm.confirm(otp);
        return true;
      } catch (error) {
        notifyToast('Invalid OTP');
        return false;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    setLoading(true);
    database()
      .ref('users')
      .once('value')
      .then((snapshot: any) => {
        console.log(snapshot.val());
        if (snapshot.val()) {
          const resp = Object.values(snapshot.val());
          console.log(resp);
          setUsers(resp);
        }
        setLoading(false);
      });
  }, []);

  const onSignUp = async () => {
    setLoading(true);
    const e = email.trim();
    const p = password.trim();

    console.log(e);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(e) === false) {
      console.log('Email is Not Correct');
      setLoading(false);
      notifyToast('Please check your Email.');
      return;
    }

    const find = users.find(x => x.email.toLowerCase() === e.toLowerCase());

    // console.log('find', find);
    if (find) {
      setLoading(false);
      notifyToast(messages.userAlreadyExist);
    } else {
      if (password.trim().length >= 5) {
        const c = await confirmCode();
        if (p && e && phoneNo) {
          const ref = database().ref('users');
          const time = new Date().toUTCString();
          const data = {
            password: p,
            createdOn: time,
            email: e.toLowerCase(),
            phoneNumber: phoneNo,
            name: '',
            profilePic: '',
            isPayment: false,
            address: '',
            paymentType: '',
          };

          // return console.log('data ;_...', data);
          ref.push(data);
          const allUsers = [...users];
          allUsers.push(data);
          notifyToast('Your account is created successfully');
          props.navigation.dispatch(StackActions.replace(Screens.login));
          setLoading(false);
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
        notifyToast('Password must be more than four characters');
      }
    }
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <AuthAppBar />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        enableAutomaticScroll
        style={styles.mainView}>
        <Text style={styles.mainHeading}>Welcome! Create your Profile</Text>
        <Text style={styles.secondaryHeading}>
          Enter detail below to create Yarrow account
        </Text>

        <View mt={20}>
          <EmailInput
            value={email}
            onChange={(text: string) => {
              setEmail(text);
            }}
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
            placeHolder={'Password'}
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

          <Input
            height={52}
            marginTop={5}
            width={widthToDp(85)}
            borderRadius={8}
            borderColor={Colors.borderColor}
            placeholder={'Phone Number'}
            fontFamily={Fonts.PoppinsRegular}
            fontWeight={'400'}
            fontSize={14}
            value={phoneNo}
            keyboardType={'phone-pad'}
            onChangeText={text => {
              setPhoneNo(text);
            }}
            autoCapitalize={'none'}
            color={Colors.primaryText}
            // rightElement={
            //   <Text
            //     fontWeight={'bold'}
            //     color={Colors.primary}
            //     mr={2}
            //     onPress={async () => {
            //       await signInWithMobileNumber(
            //         phoneNo.length > 0
            //           ? phoneNo[0] !== '+'
            //             ? '+92' + phoneNo
            //             : phoneNo
            //           : '',
            //       );
            //     }}>
            //     Send OTP
            //   </Text>
            // }
            placeholderTextColor={Colors.secondaryText}
          />
          {/* <Input
            height={52}
            marginTop={5}
            width={widthToDp(85)}
            borderRadius={8}
            borderColor={Colors.borderColor}
            placeholder={'OTP'}
            keyboardType={'number-pad'}
            fontFamily={Fonts.PoppinsRegular}
            fontWeight={'400'}
            fontSize={14}
            value={otp}
            onChangeText={text => {
              setOtp(text);
            }}
            autoCapitalize={'none'}
            color={Colors.primaryText}
            placeholderTextColor={Colors.secondaryText}
          /> */}
          <PrimaryButton
            height={52}
            onPress={async () => {
              if (
                password.trim() === rePassword.trim() &&
                password.trim() &&
                phoneNo &&
                email
              ) {
                console.log(phoneNo.length);
                if (phoneNo.length >= 10) {
                  if (email.trim() && password.trim()) {
                    await onSignUp();
                  } else {
                    notifyToast(messages.requiredFieldsMissing);
                  }
                } else {
                  notifyToast('Please check your Phone number.');
                }
              } else {
                notifyToast('Please check all your credentials.');
              }
            }}
            title={'Sign Up'}
            width={widthToDp(85)}
            marginTop={10}
            textFontSize={16}
          />
        </View>
      </KeyboardAwareScrollView>
      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: Colors.white,
  },
  mainHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(26),
    lineHeight: 38,
    fontWeight: '500',

    color: Colors.primaryText,
    width: widthToDp(70),
  },
  secondaryHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    lineHeight: 27,
    fontWeight: '400',
    width: widthToDp(70),
    color: Colors.secondaryText,
  },
  mainView: {
    marginLeft: 20,
    marginTop: 20,
    // height: heightToDp(85),
  },
});
