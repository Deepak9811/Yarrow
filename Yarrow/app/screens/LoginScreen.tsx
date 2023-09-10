import database from '@react-native-firebase/database';
import {StackActions} from '@react-navigation/native';
import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
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

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    database()
      .ref('users')
      .once('value')
      .then((snapshot: any) => {
        console.log('snapshot :->> ', Object.values(snapshot.val()));
        if (snapshot.val()) {
          const resp = Object.values(snapshot.val());
          console.log(resp);
          setUsers(resp);
        }
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
          <AuthAppBar />
          <View style={styles.mainView}>
            <Text style={styles.mainHeading}>Sign In to Yarrow</Text>
            <Text style={styles.secondaryHeading}>Don’t have an account?</Text>
            <SecondaryButton
              onPress={() => navigate(Screens.signUp)}
              title={'Sign Up'}
              width={widthToDp(24)}
              marginTop={5}
              height={45}
            />
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
                marginTop={10}
                secureText={securePassword}
                onPressUnsecure={() => {
                  setSecurePassword(!securePassword);
                }}
                placeHolder={'Password'}
              />
              <PrimaryButton
                height={52}
                onPress={async () => {
                  const e = email.trim();
                  const p = password.trim();
                  if (e && p) {
                    console.log(users);
                    const x: any = users
                      ? users.find(
                          (val: any) =>
                            val.email.toLowerCase() === e.toLowerCase(),
                        )
                      : undefined;

                    console.log('x :->> ', x);

                    if (!x) {
                      notifyToast(
                        'No data found. Please check your credential',
                      );
                      return;
                    }

                    console.log(x, x.password, p);
                    if (
                      x.email.toLowerCase() === e.toLowerCase() &&
                      x.password === p
                    ) {
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
                title={'Login'}
                width={widthToDp(85)}
                marginTop={10}
                textFontSize={16}
              />
            </View>
            <Text
              onPress={() => navigate(Screens.forgotPass)}
              style={styles.forgotText}>
              Forgot password?
            </Text>
          </View>
          {loading && <AppLoader />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;
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
