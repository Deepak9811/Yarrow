import {Button, HStack, Pressable, Text, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {api} from '../utils/Api';

import database from '@react-native-firebase/database';
import {
  CardField,
  StripeContainer,
  useStripe,
} from '@stripe/stripe-react-native';
// import {
//   endConnection,
//   getSubscriptions,
//   initConnection,
//   requestSubscription,
//   type Subscription,
//   type SubscriptionPurchase,
// } from 'react-native-iap';
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
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

import {useFocusEffect} from '@react-navigation/native';
import {navigate} from '../services/navigationRef';

const BuyPremiumScreen = () => {
  const [profileData, setProfileData] = useState<IProfile>({
    profilePic: defaultProfileImage,
    name: '',
    password: '',
    createdOn: '',
    email: '',
    isPayment: false,
    paymentType: '',
    phoneNumber: '',
    address: '',
  });
  const [profileKey, setProfileKey] = useState('');
  const [loader, setLoader] = useState(false);
  // const [product, setProduct] = useState<Subscription[]>([]);
  const [selectedPurchase, setSelectedPurchase] = useState('premium');
  const items = Platform.select({
    ios: ['com.premium.yarrow', 'com.popular.premium.yarrow'],
    android: ['non_premium_1m', 'premium_1m'],
  }) as string[];

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
      database()
        .ref('users')
        .once('value')
        .then(async (snapshot: any) => {
          const e = await getEmail();
          if (snapshot.val()) {
            const resp = Object.values(snapshot.val());
            const resp1 = Object.keys(snapshot.val());
            const profile: any = resp.find((x: any) => x.email === e);
            console.log('data :->> ', profile.paymentType);

            if (profile) {
              const index = resp.indexOf(profile);
              setProfileKey(resp1[index]);
              console.log(profile);
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
              setLoader(false);
            } else {
              setLoader(false);
            }
          }
        });
    }, []),
  );

  // useEffect(() => {
  //   setLoader(true);
  //   // initConnection()
  //   //   .then(() => {
  //   //     getSubscriptions({skus: items}).then(val => {
  //   //       setProduct(val);
  //   //     });
  //   //   })
  //   //   .catch(e => {
  //   //     console.log(e);
  //   //   });

  //   database()
  //     .ref('users')
  //     .once('value')
  //     .then(async (snapshot: any) => {
  //       const e = await getEmail();
  //       if (snapshot.val()) {
  //         const resp = Object.values(snapshot.val());
  //         const resp1 = Object.keys(snapshot.val());
  //         const profile: any = resp.find((x: any) => x.email === e);
  //         console.log('data :->> ', profile.paymentType);

  //         if (profile) {
  //           const index = resp.indexOf(profile);
  //           setProfileKey(resp1[index]);
  //           console.log(profile);
  //           setProfileData({
  //             profilePic: profile.profilePic,
  //             name: profile.name,
  //             address: profile.address,
  //             phoneNumber: profile.phoneNumber,
  //             email: profile.email,
  //             isPayment: profile.isPayment,
  //             createdOn: profile.createdOn,
  //             password: profile.password,
  //             paymentType: profile.paymentType,
  //           });
  //           setLoader(false);
  //         } else {
  //           setLoader(false);
  //         }
  //       }
  //     });
  //   // return () => {
  //   //   endConnection();
  //   // };
  // }, []);

  // const purchaseSubscription = async (pr: any) => {
  //   setLoader(true);
  //   console.log(pr);
  //   try {
  //     const subscriptionOffers = {
  //       sku: pr.productId,
  //       offerToken: pr.subscriptionOfferDetails[0].offerToken,
  //     } as {sku: string; offerToken: string};
  //     console.log('subscriptionoffers', subscriptionOffers);
  //     // const item = Platform.OS==='android'?pr.description:null

  //     const x: void | SubscriptionPurchase | null = await requestSubscription({
  //       sku: subscriptionOffers.sku,
  //       subscriptionOffers: [subscriptionOffers],
  //     });
  //     console.log('requestsub', x);
  //     // if (x?.transactionReceipt) {
  //     //   console.log(x)
  //     database().ref('users').child(profileKey).update({
  //       profilePic: profileData.profilePic,
  //       name: profileData.name,
  //       address: profileData.address,
  //       phoneNumber: profileData.phoneNumber,
  //       email: profileData.email,
  //       isPayment: true,
  //       createdOn: profileData.createdOn,
  //       password: profileData.password,
  //       paymentType: selectedPurchase,
  //     });
  //     store.updatePaymentType(selectedPurchase);
  //     setLoader(false);
  //     goBack();
  //     // }
  //   } catch (err: any) {
  //     notifyToast(err.message);
  //     setLoader(false);
  //   }
  // };

  // const purchaseSubscriptionIos = async (pr: any) => {
  //   setLoader(true);
  //   console.log(pr);
  //   const sku: string = pr.productId;

  //   try {
  //     const x: void | SubscriptionPurchase | null = await requestSubscription({
  //       sku: sku,
  //       andDangerouslyFinishTransactionAutomaticallyIOS: false,
  //     });
  //     if (x?.transactionReceipt) {
  //       database().ref('users').child(profileKey).update({
  //         profilePic: profileData.profilePic,
  //         name: profileData.name,
  //         address: profileData.address,
  //         phoneNumber: profileData.phoneNumber,
  //         email: profileData.email,
  //         isPayment: true,
  //         createdOn: profileData.createdOn,
  //         password: profileData.password,
  //         paymentType: selectedPurchase,
  //       });
  //       store.updatePaymentType(selectedPurchase);
  //       setLoader(false);
  //       goBack();
  //     } else {
  //       setLoader(false);
  //     }
  //   } catch (err: any) {
  //     notifyToast(err.message);
  //     setLoader(false);
  //   }
  // };

  const {confirmPayment} = useStripe();
  // const stripePost = async () => {
  //   try {
  //     fetch('http://192.168.2.48:8080/stripe/create-payment', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         planId: 1,
  //       }),
  //     }).then(data => {
  //       data.json().then(async resp => {
  //         console.log('response :->>>> ', resp);
  //         if (resp) {
  //           const {paymentIntent, error} = await confirmPayment(
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
  //     console.log('catch error ;->>>>> ', error);
  //   }
  // };

  const cancelSub = async () => {
    setLoader(true);

    let url = `${api}/cancel-sub-test`;
    // let url = `http://192.168.2.48:8080/cancel-sub-test`;

    try {
      let fetching = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: profileData.email,
          phone: profileData.phoneNumber,
        }),
      });

      let resp = await fetching.json();
      console.log('response :->>> ', resp);
      if (resp.status === 'canceled') {
        database().ref('users').child(profileKey).update({
          profilePic: profileData.profilePic,
          name: profileData.name,
          address: profileData.address,
          phoneNumber: profileData.phoneNumber,
          email: profileData.email,
          isPayment: false,
          createdOn: profileData.createdOn,
          password: profileData.password,
          paymentType: '',
        });
        store.updatePaymentType('');
        store.updateSub(0);
        store.updateItemCount(0);

        Alert.alert('Alert', 'Your Subscription has been cancelled.');
        setTimeout(() => {
          setLoader(false);
          goBack();
        }, 1000);
      } else {
        setLoader(false);
        Alert.alert('Error!', 'Something went wrong. Please try agian.');
      }
    } catch (error: any) {
      setLoader(false);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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

          {profileData.paymentType === '' ? (
            <>
              <View style={styles.percentOff}>
                <Text style={styles.percentOffText}>50% off Premium</Text>
              </View>

              <HStack>
                <Pressable
                  onPress={() => setSelectedPurchase('non-premium')}
                  style={{
                    ...styles.hundredContainer,
                    backgroundColor:
                      selectedPurchase === 'non-premium'
                        ? Colors.primary
                        : Colors.white,
                    // marginLeft: 10,
                  }}>
                  <Text
                    style={[styles.priceText, {marginTop: 10}]}
                    color={
                      selectedPurchase === 'non-premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    100$
                  </Text>
                  <Text
                    style={styles.perMonthText}
                    color={
                      selectedPurchase === 'non-premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    Per Month
                  </Text>
                  <View
                    style={styles.border}
                    backgroundColor={
                      selectedPurchase === 'non-premium'
                        ? Colors.white
                        : Colors.borderColor
                    }
                  />
                  <Text
                    style={styles.perMonthText}
                    color={
                      selectedPurchase === 'non-premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    Store 3 items
                  </Text>
                  <Text
                    pb={2}
                    style={[styles.perMonthText, {paddingHorizontal: 20}]}
                    color={
                      selectedPurchase === 'non-premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    3 Pick & Drops
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => setSelectedPurchase('premium')}
                  style={{
                    ...styles.popularContainer,
                    backgroundColor:
                      selectedPurchase === 'premium'
                        ? Colors.primary
                        : Colors.white,
                  }}>
                  <View
                    borderTopRadius={12}
                    backgroundColor={
                      selectedPurchase === 'premium'
                        ? Colors.primaryLight
                        : Colors.white
                    }
                    width={'100%'}>
                    <Text
                      py={1}
                      style={styles.perMonthText}
                      color={
                        selectedPurchase === 'premium'
                          ? Colors.white
                          : Colors.secondaryText
                      }>
                      Most Popular
                    </Text>
                  </View>
                  <Text
                    style={styles.priceText}
                    color={
                      selectedPurchase === 'premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    150$
                  </Text>
                  <Text
                    style={styles.perMonthText}
                    color={
                      selectedPurchase === 'premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    Per Month
                  </Text>
                  <View
                    style={styles.border}
                    backgroundColor={
                      selectedPurchase === 'premium'
                        ? Colors.white
                        : Colors.borderColor
                    }
                  />
                  <Text
                    style={styles.perMonthText}
                    color={
                      selectedPurchase === 'premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    Store 7 items
                  </Text>
                  <Text
                    style={styles.perMonthText}
                    color={
                      selectedPurchase === 'premium'
                        ? Colors.white
                        : Colors.secondaryText
                    }>
                    Unlimited Pickup and drops
                  </Text>
                </Pressable>
              </HStack>

              <HStack my={5} ml={5}>
                <Safety width={4} height={4} />
                <Text style={styles.secureText}>
                  Secured with App Store. Auto renewable billing. Cancel
                  anytime.
                </Text>
              </HStack>
              {/* {console.log('product :->>>> ', product[1], product[0])} */}
              {/* <View justifyContent={'center'} alignItems={'center'}>
                <PrimaryButton
                  onPress={async () => {
                    Platform.OS === 'android'
                      ? await purchaseSubscription(
                          selectedPurchase === 'premium'
                            ? product[1]
                            : product[0],
                        )
                      : await purchaseSubscriptionIos(
                          selectedPurchase === 'premium'
                            ? product[1]
                            : product[2],
                        );
                  }}
                  title={'Continue'}
                  width={widthToDp(90)}F
                  height={50}
                  textFontSize={14}
                />
              </View> */}

              <View
                justifyContent={'center'}
                alignItems={'center'}
                style={{marginBottom: 10}}>
                <PrimaryButton
                  onPress={() =>
                    navigate(Screens.stripeScreen, {
                      amount: selectedPurchase,
                      profileKey: profileKey,
                      userData: profileData,
                    })
                  }
                  // onPress={() => stripePost()}
                  title={'Continue'}
                  width={widthToDp(90)}
                  height={50}
                  textFontSize={14}
                  marginTop={5}
                />
              </View>

              {/* <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
                marginTop: 15,
              }}>
              <Text style={{color: Colors.secondaryText}}>
                Restore Purchase
              </Text>
              <Text style={{color: Colors.secondaryText}}>Redeem Code</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                marginTop: 45,
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: Colors.secondaryText,
                }}>
                <Text style={{color: Colors.secondaryText, fontSize: 10}}>
                  Privacy Policy & Terms of Use
                </Text>
              </View>
            </View> */}
            </>
          ) : (
            <View>
              <Text
                mt={5}
                style={styles.perMonthText}
                color={Colors.secondaryText}>
                Congratulation You have Subscribed
              </Text>
              {profileData.paymentType === 'premium' ? (
                <View justifyContent={'center'} alignItems={'center'}>
                  <View
                    style={{
                      ...styles.popularContainer,
                      backgroundColor: Colors.primary,
                      marginLeft: widthToDp(0),
                    }}>
                    <Text
                      style={[styles.priceText, {marginTop: 10}]}
                      color={Colors.white}>
                      150$
                    </Text>
                    <Text style={styles.perMonthText} color={Colors.white}>
                      Per Month
                    </Text>
                    <View
                      style={styles.border}
                      backgroundColor={Colors.white}
                    />
                    <Text style={styles.perMonthText} color={Colors.white}>
                      Store 7 items
                    </Text>
                    <Text
                      style={[
                        styles.perMonthText,
                        {marginBottom: 15, paddingHorizontal: 5},
                      ]}
                      color={Colors.white}>
                      Unlimited Pickup and drops
                    </Text>
                  </View>
                </View>
              ) : (
                <View justifyContent={'center'} alignItems={'center'}>
                  <View
                    style={{
                      ...styles.hundredContainer,
                      backgroundColor: Colors.primary,
                      marginLeft: -15,
                    }}>
                    <Text
                      style={[styles.priceText, {marginTop: 10}]}
                      color={Colors.white}>
                      100$
                    </Text>
                    <Text style={styles.perMonthText} color={Colors.white}>
                      Per Month
                    </Text>
                    <View
                      style={styles.border}
                      backgroundColor={Colors.white}
                    />
                    <Text style={styles.perMonthText} color={Colors.white}>
                      Store 3 items
                    </Text>
                    <Text
                      pb={2}
                      style={[styles.perMonthText, {paddingHorizontal: 25}]}
                      color={Colors.white}>
                      3 Pick & Drops
                    </Text>
                  </View>

                  <View justifyContent={'center'} alignItems={'center'}>
                    <Pressable
                      style={styles.button}
                      onPress={() =>
                        Alert.alert(
                          'Alert!',
                          'You need to first cancel your current Subscription.',
                        )
                      }>
                      <Text style={styles.logout}>Upgrade Subscription</Text>
                    </Pressable>
                  </View>
                </View>
              )}

              <View justifyContent={'center'} alignItems={'center'}>
                <Pressable style={styles.button} onPress={() => cancelSub()}>
                  <Text style={styles.logout}>Cancel Subscription</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>

        {loader && <AppLoader />}
      </ScrollView>
    </SafeAreaView>
  );
};
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
  button: {
    marginTop: 20,
    height: 48,
    width: widthToDp(70),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background2,
    // paddingHorizontal: 20,
  },
  logout: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.red,
  },
});
export default BuyPremiumScreen;
