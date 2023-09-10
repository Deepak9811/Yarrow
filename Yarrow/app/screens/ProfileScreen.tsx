import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import {StackActions, useFocusEffect} from '@react-navigation/native';
import {
  HStack,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Alert, Linking, Platform, SafeAreaView, StyleSheet} from 'react-native';
import AboutUs from '../assets/svg/AboutUs';
import DeleteLogo from '../assets/svg/DeleteLogo';
import Location from '../assets/svg/Location';
import Membership from '../assets/svg/Membership';
import MyItem from '../assets/svg/MyItem';
import PersonalDetail from '../assets/svg/PersonalDetail';
import RightArrow from '../assets/svg/RightArrow';
import AppLoader from '../components/AppLoader';
import {defaultProfileImage} from '../helpers/constant';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {getEmail} from '../helpers/storage';
import {IProfile} from '../model/profile.model';
import {goBack, navigate} from '../services/navigationRef';
import {store} from '../store';
import {api} from '../utils/Api';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const ProfileScreen = (props: any) => {
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
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  console.log('profileData.isPayment :-> ', profileData.isPayment);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      database()
        .ref('users')
        .once('value')
        .then(async (snapshot: any) => {
          const e = await getEmail();
          console.log('email', e);
          console.log(snapshot.val());
          if (snapshot.val()) {
            const resp = Object.values(snapshot.val());
            console.log(resp);
            const resp1 = Object.keys(snapshot.val());

            const profile: any = resp.find((x: any) => x.email === e);

            if (profile) {
              console.log('profile details :->>> ', profile);
              const index = resp.indexOf(profile);
              setProfileKey(resp1[index]);
              setProfileData({
                profilePic: profile.profilePic
                  ? profile.profilePic
                  : defaultProfileImage,
                name: profile.name,
                address: profile.address,
                phoneNumber: profile.phoneNumber,
                email: profile.email,
                isPayment: profile.isPayment,
                createdOn: profile.createdOn,
                password: profile.password,
                paymentType: profile.paymentType,
              });
              setLoading(false);
            } else {
              setLoading(false);
            }
          }
        });
    }, []),
  );

  console.log('ProfileKey :->>> ', profileKey);

  const deleteProfile = async () => {
    setLoading(true);
    await database().ref('users').child(profileKey).remove();
    setLoading(false);
  };

  const cancelSub = async () => {
    setLoading(true);

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

        setTimeout(() => {
          Alert.alert('Alert', 'Your Subscription has been cancelled.');
          setLoading(false);
          goBack();
        }, 1000);
      } else {
        setLoading(false);
        Alert.alert('Error!', 'Something went wrong. Please try agian.');
      }
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.mainView}>
        <Image
          style={styles.picture}
          alt=""
          source={{uri: profileData.profilePic}}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{profileData.name}</Text>
          <HStack alignItems={'center'}>
            <Location width={6} height={6} />
            <Text style={styles.location}>
              {profileData.address
                ? profileData.address[profileData.address.length - 1]
                : 'N/A'}
            </Text>
          </HStack>
        </View>
        <ScrollView
          // pl={5}
          // mt={10}
          style={{
            maxHeight: heightToDp(48),
            paddingHorizontal: 20,
            marginTop: 20,
          }}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.infoText}>Personal Information</Text>
          <Pressable
            style={styles.infoSingleItem}
            onPress={() =>
              navigate(Screens.editProfile, {
                data: profileData,
                profileKey: profileKey,
              })
            }>
            <HStack>
              <PersonalDetail width={5} height={5} />
              <Text style={styles.infoSingleItemText}>Personal Details</Text>
            </HStack>
            <RightArrow width={4} height={4} />
          </Pressable>
          <Pressable
            style={styles.infoSingleItem}
            onPress={() =>
              navigate(Screens.addLocation, {
                profileData: profileData,
                profileKey: profileKey,
              })
            }>
            <HStack>
              <Location width={5} height={5} />
              <Text style={styles.infoSingleItemText}>My Address</Text>
            </HStack>

            <RightArrow width={4} height={4} />
          </Pressable>
          <Pressable
            style={styles.infoSingleItem}
            onPress={() => navigate(Screens.buyPremium)}>
            <HStack>
              <Membership width={5} height={5} />
              <Text style={styles.infoSingleItemText}>Membership</Text>
            </HStack>
            <RightArrow width={4} height={4} />
          </Pressable>
          <Pressable
            style={styles.infoSingleItem}
            onPress={() => navigate(Screens.myItems)}>
            <HStack>
              <MyItem width={5} height={5} />
              <Text style={styles.infoSingleItemText}>My Items</Text>
            </HStack>
            <RightArrow width={4} height={4} />
          </Pressable>
          <Text style={styles.infoText} mt={5}>
            Others
          </Text>
          <Pressable
            style={styles.infoSingleItem}
            onPress={() => Linking.openURL('https://yarrow.tech/about/')}>
            <HStack>
              <AboutUs width={5} height={5} />
              <Text style={styles.infoSingleItemText}>About Us</Text>
            </HStack>

            <RightArrow width={4} height={4} />
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={async () => {
              await AsyncStorage.clear();
              props.navigation.dispatch(
                StackActions.replace(Screens.onBoarding),
              );
            }}>
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
          {/* {profileData.isPayment && (
            <Pressable
              style={styles.button}
              onPress={() =>
                Platform.OS === 'android'
                  ? Linking.openURL(
                      `https://play.google.com/store/account/subscriptions?package=com.yarrow&sku=${
                        profileData.paymentType === 'premium'
                          ? 'premium_1m'
                          : 'non_premium_1m'
                      }`,
                    )
                  : Linking.openURL(
                      'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions',
                    )
              }>
              <Text style={styles.logout}>Cancel Subscription</Text>
            </Pressable>
          )} */}
          {profileData.isPayment && (
            <Pressable style={styles.button} onPress={() => cancelSub()}>
              <Text style={styles.logout}>Cancel Subscription</Text>
            </Pressable>
          )}

          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.logout}>Delete Account</Text>
          </Pressable>
        </ScrollView>
      </View>
      <Modal
        animationPreset="slide"
        isOpen={modalVisible}
        backdropVisible={true}
        backgroundColor={'rgba(255, 255, 255, 0.2)'}>
        <Modal.Content width={widthToDp(70)} borderRadius={15}>
          <Modal.Body justifyContent={'space-between'}>
            <View justifyContent={'center'} alignItems={'center'}>
              <Text style={styles.modalTitle}>
                Are you sure you want to Delete Your account
              </Text>
              <Text style={styles.modalText} my={2}>
                You have to pay again to use this application
              </Text>
              <HStack
                // my={5}
                justifyContent={'center'}
                alignItems={'center'}
                width={widthToDp(50)}>
                <DeleteLogo width={50} height={30} />
              </HStack>
              <Pressable
                mt={7}
                onPress={async () => {
                  await deleteProfile();
                  await AsyncStorage.clear();
                  setModalVisible(false);
                  props.navigation.dispatch(
                    StackActions.replace(Screens.onBoarding),
                  );
                  // navigate(Screens.bottom);
                }}
                style={styles.modalBtn}>
                <Text
                  color={Colors.white}
                  fontFamily={Fonts.PoppinsBold}
                  fontWeight={'400'}>
                  Delete
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.cancelBtn}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fullScreen: {
    height: heightToDp(100),
    width: widthToDp(100),
    backgroundColor: Colors.white1,
    justifyContent: 'flex-end',
  },
  mainView: {
    height: heightToDp(80),
    width: widthToDp(100),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: Colors.white,
    position: 'relative',
  },
  picture: {
    width: 120,
    height: 120,
    borderRadius: 24,
    position: 'absolute',
    top: -heightToDp(7),
    left: widthToDp(35),
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthToDp(100),
    marginTop: heightToDp(8),
  },
  name: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(22),
    fontWeight: '600',
    lineHeight: 32,
    color: Colors.primaryText,
  },
  location: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 5,
    color: Colors.primaryText,
  },
  infoText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.primaryText,
  },
  infoSingleItem: {
    height: 48,
    width: widthToDp(90),
    marginTop: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background1,
    paddingHorizontal: 20,
  },
  infoSingleItemText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.primaryText,
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
    height: 48,
    width: widthToDp(90),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background1,
    // paddingHorizontal: 20,
  },
  notification: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.primaryText,
  },
  logout: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.red,
  },

  modalTitle: {
    fontFamily: Fonts.PoppinsBold,
    fontWeight: '600',
    fontSize: 16,

    textAlign: 'center',
    color: Colors.red,
  },
  cancelText: {
    fontFamily: Fonts.PoppinsBold,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.secondaryText,
  },
  modalBtn: {
    width: widthToDp(60),
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 14,
  },
  cancelBtn: {
    height: 56,
    width: widthToDp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: Fonts.PoppinsBold,
    fontWeight: '400',
    fontSize: 12,
    // opacity: 0.5,
    color: Colors.primaryText,
    textAlign: 'center',
  },
});
export default ProfileScreen;
