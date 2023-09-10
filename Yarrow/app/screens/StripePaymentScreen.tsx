import {Button, HStack, Pressable, Text, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import database from '@react-native-firebase/database';
import {
  CardField,
  confirmSetupIntent,
  initPaymentSheet,
  presentPaymentSheet,
  SetupIntent,
  StripeContainer,
  useStripe,
} from '@stripe/stripe-react-native';

import {StackActions, useFocusEffect} from '@react-navigation/native';
import CloseIconPrimary from '../assets/svg/CloseIconPrimary';
import CloseIconSecondary from '../assets/svg/CloseIconSecondary';
import Safety from '../assets/svg/Safety';
import AppLoader from '../components/AppLoader';
import PrimaryButton from '../components/PrimaryButton';
import {defaultProfileImage} from '../helpers/constant';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {getEmail} from '../helpers/storage';
import {IProfile} from '../model/profile.model';
import {goBack} from '../services/navigationRef';
import {store} from '../store';
import {api} from '../utils/Api';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const StripePaymentScreen = (props: any) => {
  const [profileData, setProfileData] = useState<IProfile>(
    props.route.params.userData,
  );
  const [cardBrand, setCardBrand] = useState();
  const [cardMonth, setCardMonth] = useState();
  const [cardYear, setCardYear] = useState();
  const [currentCardNumber, setCurrentCardNumber] = useState();
  const [isValidCvv, setIsValidCvv] = useState(false);
  const [loader, setLoader] = useState(false);
  const [paymentSecret, setPaymentSecret] = useState('');
  const [allowPayment, setAllowPayment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const {confirmPayment} = useStripe();
  const [profileKey, setProfileKey] = useState(props.route.params.profileKey);

  const getClientSecret = async () => {
    console.log('user data :->> ', profileData.email);
    setLoader(true);
    let amount;
    let planId;
    if (props.route.params.amount === 'premium') {
      planId = 2;
    } else {
      planId = 1;
    }

    let url;
    let live;
    let liveUrl = true;
    if (liveUrl !== true) {
      url = 'live-payment';
    } else {
      url = 'test-payment';
    }

    try {
      const res = await fetch(`${api}/${url}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          planId: planId,
          // email: 'test@teste.com',
          email: profileData.email,
          phone: profileData.phoneNumber,
        }),
      });

      const data = await res.json();
      console.log('response back-end :->>> ', data);
      setPaymentSecret(data.clientSecret);
      setLoader(false);
      // const {error, paymentOption} = await initPaymentSheet({
      //   customerId: data.customer,
      //   customerEphemeralKeySecret: data.ephemeralKey,
      //   setupIntentClientSecret: data.clientSecret,
      //   returnURL: `stripe-example://stripe-redirect`,
      //   allowsDelayedPaymentMethods: true,
      // });
      // console.log(`paymentOption :->>>> `, paymentOption);
      // if (paymentOption) {
      //   setAllowPayment(true);
      // } else {
      //   setAllowPayment(false);
      // }
    } catch (error: any) {
      // setLoader(false);
      setLoader(false);
      goBack();
      Alert.alert('Error', error.message);
      console.log('catch error ;->>>>> ', error);
    }

    // if (props.route.params.amount === 'premium') {
    //   try {
    //     const res = await fetch(
    //       'http://192.168.2.48:8080/stripe/create-payment',
    //       {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           planId: 2,
    //           amount: amount,
    //         }),
    //       },
    //     );

    //     const data = await res.json();
    //     console.log('response back-end :->>> ', data);
    //     setPaymentSecret(data.clientSecret);
    //     // const {error, paymentOption} = await initPaymentSheet({
    //     //   customerId: data.customer,
    //     //   customerEphemeralKeySecret: data.ephemeralKey,
    //     //   setupIntentClientSecret: data.clientSecret,
    //     //   returnURL: `stripe-example://stripe-redirect`,
    //     //   allowsDelayedPaymentMethods: true,
    //     // });
    //     // console.log(`paymentOption :->>>> `, paymentOption);
    //     // if (paymentOption) {
    //     //   setAllowPayment(true);
    //     // } else {
    //     //   setAllowPayment(false);
    //     // }
    //   } catch (error) {
    //     // setLoader(false);
    //     goBack();
    //     alert(error.message);
    //     console.log('catch error ;->>>>> ', error);
    //   }
    // } else if (props.route.params.amount === 'non-premium') {
    //   try {
    //     fetch('http://192.168.2.48:8080/stripe/create-payment', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         planId: 1,
    //         amount: amount,
    //       }),
    //     }).then(data => {
    //       data.json().then(async resp => {
    //         console.log('response :->>>> ', resp);
    //         setLoader(false);
    //         if (resp) {
    //           const {paymentIntent, error} = await SetupIntent(
    //             resp.clientSecret,
    //             {
    //               paymentMethodType: 'Card',
    //               paymentMethodData: {
    //                 billingDetails: {
    //                   name: 'john wick',
    //                   phone: '+911234567899',
    //                 },
    //               },
    //             },
    //           );
    //           if (paymentIntent?.paymentMethod?.id) {
    //             console.log(`successs`);
    //           }

    //           // if (error) {
    //           //   alert('error');
    //           // }
    //         }
    //       });
    //     });
    //   } catch (error) {
    //     setLoader(false);
    //     console.log('catch error ;->>>>> ', error);
    //   }
    // }
  };

  useEffect(() => {
    console.log(
      'props.route.params.amount :-====> ',
      props.route.params.amount,
    );
    getClientSecret();

    try {
      database()
        .ref('users')
        .once('value')
        .then(async (snapshot: any) => {
          const e = await getEmail();
          if (snapshot.val()) {
            const resp = Object.values(snapshot.val());
            const resp1 = Object.keys(snapshot.val());
            const profile: any = resp.find((x: any) => x.email === e);
            console.log(profile);

            if (profile) {
              const index = resp.indexOf(profile);
              setProfileKey(resp1[index]);
              console.log(resp1[index]);
              setProfileData({
                profilePic: profile.profilePic,
                name: profile.name,
                address: profile.address,
                phoneNumber: profile.phoneNumber,
                email: profile.email,
                isPayment: profile.isPayment,
                createdOn: profile.createdOn,
                password: profile.password,
                paymentType: profile.paymentType,
              });
              // setLoader(false);
            } else {
              // setLoader(false);
            }
          }
        });
    } catch (error) {
      console.log('error in database:->> ', error);
    }
  }, []);

  const PayHandler = async () => {
    if (!isValidCvv) {
      setLoader(false);
      return alert('Please fill the details.');
    }
    setLoader(true);
    setTimeout(async () => {
      const {error, paymentIntent} = await confirmPayment(paymentSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails: {
            name: profileData.name,
            email: profileData.email,
            phone: profileData.phoneNumber,
          },
        },
      });
      console.log(
        paymentIntent?.paymentMethod?.customerId,
        paymentIntent,
        `full is here`,
      );
      setShowModal(true);
      if (error) {
        console.log(error, `Error in the payment`);
        setErrorMsg(true);
        setLoader(false);
        // setTimeout(() => {
        //   goBack();
        // }, 1000 * 10);
      } else {
        const data = {
          profilePic: profileData.profilePic,
          name: profileData.name,
          address: profileData.address,
          phoneNumber: profileData.phoneNumber,
          email: profileData.email,
          isPayment: true,
          createdOn: profileData.createdOn,
          password: profileData.password,
          paymentType: props.route.params.amount,
        };
        console.log('data :->>>>>>>> ', data);
        database().ref('users').child(profileKey).update(data);

        store.updatePaymentType(props.route.params.amount);
        store.updateSub(1);
        setLoader(false);
        console.log(`Payment is success`);
        setErrorMsg(false);
        // setTimeout(() => {
        //   // goBack();
        //   props.navigation.dispatch(StackActions.replace(Screens.bottomTab));
        // }, 1000 * 10);
      }
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(22, 23, 25, 0.4)',
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={[styles.closeButton, {width: '100%'}]}>
                  <Pressable
                    onPress={() =>
                      props.navigation.dispatch(
                        StackActions.replace(Screens.bottomTab),
                      )
                    }>
                    <CloseIconPrimary height={5} width={5} />
                  </Pressable>
                </View>
                <View style={{marginTop: 15}}>
                  {errorMsg ? (
                    <View
                      style={{
                        marginBottom: 15,
                        padding: 15,
                        borderRadius: 50,
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',
                      }}>
                      <View
                        style={{
                          backgroundColor: 'red',
                          padding: 15,
                          borderRadius: 50,
                        }}>
                        <CloseIconSecondary height={10} width={10} />
                      </View>
                    </View>
                  ) : (
                    <Safety width={20} height={20} />
                  )}
                </View>
                <Text
                  style={[
                    styles.successText,
                    {color: errorMsg ? 'red' : 'green'},
                  ]}>
                  {errorMsg ? 'Error!' : 'Thank you!'}
                </Text>
                <Text
                  style={{
                    marginBottom: 15,
                    textAlign: 'center',
                    padding: 5,
                    fontSize: 15,
                  }}>
                  {errorMsg
                    ? 'Error in the payment'
                    : 'Your Payment is Successfully Done.'}
                </Text>
              </View>
            </View>
          </View>
        </Modal>

        <View>
          <ImageBackground
            source={require('../assets/images/buyMembersip.png')}
            style={styles.image}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <View style={styles.closeButton}>
                <Pressable onPress={() => goBack()}>
                  <CloseIconSecondary height={5} width={5} />
                </Pressable>
              </View>
              <View style={styles.imageData}>
                <Text style={styles.yourDreamText}>Pursue Your Dreams</Text>
                <Text style={styles.yarrowAim}>
                  Yarrow aims to take the burden off of you when it comes to
                  safe storage without the hassle
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{margin: 15}}>
          <StripeContainer keyboardShouldPersistTaps={false}>
            <ScrollView keyboardShouldPersistTaps="always">
              {/* {/ <Row style={{maxHeight: 280}}> /} */}
              <CardField
                postalCodeEnabled={false}
                autofocus
                placeholders={{
                  // number: '4242 4242 4242 4242',
                  postalCode: '12345',
                  cvc: 'CVC',
                  expiration: 'MM|YY',
                }}
                onCardChange={cardDetails => {
                  console.log('card details :->>> ', cardDetails?.complete);
                  if (cardDetails.brand && !cardBrand) {
                    setCardBrand(cardDetails.brand);
                  }
                  if (cardDetails?.expiryMonth) {
                    let month = cardDetails?.expiryMonth.toString();
                    month = month?.length === 1 ? `0${month}` : month;
                    setCardMonth(month);
                  }
                  if (cardDetails?.expiryMonth > 0) {
                    let year = cardDetails?.expiryYear?.toString();
                    year = year?.length === 1 ? `0${year}` : year;
                    setCardYear(year);
                    setCurrentCardNumber(cardDetails.last4);
                  }
                  if (cardDetails?.expiryYear?.toString().length > 1) {
                    //   setFlipCard(true)
                  }
                  if (cardDetails?.complete === true) {
                    setIsValidCvv(true);
                  } else {
                    setIsValidCvv(false);
                  }
                }}
                cardStyle={{
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#000000',
                  borderRadius: 8,
                  fontSize: 14,
                  placeholderColor: '#999999',
                  textColor: '#0C0C0C',
                }}
                style={{width: '100%', height: 100}}
              />
              {/* {/ </Row> /} */}
            </ScrollView>
          </StripeContainer>
        </View>

        <View
          justifyContent={'center'}
          alignItems={'center'}
          style={{marginBottom: 10}}>
          <PrimaryButton
            onPress={PayHandler}
            title={'Pay'}
            width={widthToDp(90)}
            height={50}
            textFontSize={14}
            marginTop={5}
          />
        </View>

        {loader && <AppLoader />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StripePaymentScreen;

const styles = StyleSheet.create({
  fullScreen: {
    width: widthToDp(100),
    height: heightToDp(100),
    backgroundColor: Colors.white1,
  },
  image: {
    height: heightToDp(35),
    width: widthToDp(100),
    opacity: 0.9,
  },
  percentOff: {
    width: widthToDp(100),
    height: 52,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  percentOffText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.white,
  },
  imageData: {
    marginTop: heightToDp(16),
  },
  yourDreamText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(22),
    fontWeight: '600',
    lineHeight: 33,
    textAlign: 'center',
    color: Colors.white,
  },
  yarrowAim: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.white,
    width: widthToDp(60),
    alignSelf: 'center',
  },
  closeButton: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
  hundredContainer: {
    // backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    marginLeft: widthToDp(7),
    borderRadius: 12,
    marginTop: 50,
  },
  priceText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(28),
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 42,
    alignSelf: 'center',
  },
  perMonthText: {
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(12),
    lineHeight: 18,
    marginHorizontal: 10,
  },
  secureText: {
    fontWeight: '500',
    fontSize: responsiveFontSize(10),
    lineHeight: 18,
    marginLeft: 10,
    color: Colors.secondaryText,
  },

  popularContainer: {
    // backgroundColor: Colors.primary,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    marginLeft: widthToDp(5),
    marginTop: 15,
    borderRadius: 12,
  },
  border: {
    width: '100%',
    height: 1,
    marginVertical: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    padding: 5,
  },
});
