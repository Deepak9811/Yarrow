import database from '@react-native-firebase/database';
import {FlatList, HStack, Input, SearchIcon, Text, View} from 'native-base';
import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIconPrimary from '../assets/svg/CloseIconPrimary';
import LeftArrow from '../assets/svg/LeftArrow';
import SaveIcon from '../assets/svg/SaveIcon';
import AppLoader from '../components/AppLoader';
import LocationList from '../components/LocationList';
import PrimaryButton from '../components/PrimaryButton';
import {messages} from '../helpers/messages';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IPlaces} from '../model/places.model';
import {getPlaces} from '../services/googlePlaces.service';
import {goBack} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const AddLocationScreen = (props: any) => {
  const {profileData, profileKey} = props.route.params;
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<IPlaces[]>([]);
  const [loading, setLoading] = useState(false);
  const timeout = useRef(0);
  const [savedLocations, setSaveLocations] = useState<string[]>(
    profileData.address,
  );
  const [showSaveLocation, setShowSaveLocation] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const searchLocation = (text: string) => {
    let value = text;
    setSearchText(value);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(async () => {
      setLoading(true);
      const d = await getPlaces(value.trim());
      console.log('location:->>> ', d);

      setData(d);
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      if (text.trim().length === 0) {
        setShowBtn(false);
      } else {
        setShowBtn(true);
      }
    }, 300);
  };

  const selectedLocation = async (loc: IPlaces) => {
    setLoading(true);
    console.log('loc :->>> ', {
      name: profileData.name,
      password: profileData.password,
      email: profileData.email,
      phoneNumber: profileData.phoneNumber,
      profilePic: profileData.profilePic,
      isPayment: profileData.isPayment,
      paymentType: profileData.paymentType,
      address: loc.description,
      createdOn: profileData.createdOn,
    });
    setLoading(false);
    // return;

    await database()
      .ref('users')
      .child(profileKey)
      .update({
        name: profileData.name,
        password: profileData.password,
        email: profileData.email,
        phoneNumber: profileData.phoneNumber,
        profilePic: profileData.profilePic,
        isPayment: profileData.isPayment,
        paymentType: profileData.paymentType,
        address: savedLocations
          ? [...savedLocations, loc.description]
          : [loc.description],
        // address: loc.description,
        createdOn: profileData.createdOn,
      });
    setLoading(false);
    notifyToast(messages.profileUpdated);
    goBack();
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={styles.mainHeader}>
        <Pressable onPress={() => goBack()}>
          <LeftArrow width={5} height={5} />
        </Pressable>
        <Input
          mt={7}
          placeholderTextColor={Colors.secondaryText}
          style={styles.titleInput}
          backgroundColor={Colors.white}
          width={widthToDp(80)}
          height={50}
          borderRadius={6}
          value={searchText}
          onChangeText={text => {
            searchLocation(text);
            console.log('text :->> ', text);
          }}
          placeholder="Add Location"
          leftElement={
            <View mx={2}>
              <SearchIcon width={7} height={7} />
            </View>
          }
        />
      </View>
      <View mx={5} mt={3}>
        <Pressable
          onPress={() => setShowSaveLocation(!showSaveLocation)}
          style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
          <SaveIcon width={5} height={5} />
          <Text ml={2} style={styles.savedText}>
            Saved Places
          </Text>
        </Pressable>

        {showSaveLocation && (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{height: heightToDp(15)}}
            data={savedLocations}
            renderItem={val => {
              const item: string = val.item;
              return (
                <HStack
                  mt={3}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  width={widthToDp(80)}
                  backgroundColor={Colors.borderColor}
                  py={10}
                  px={5}
                  borderRadius={8}>
                  <Text style={styles.savedLocation}>{item}</Text>
                  <Pressable
                    onPress={async () => {
                      const data = savedLocations.filter(loc => loc !== item);
                      setSaveLocations(data);
                      setLoading(true);
                      await database().ref('users').child(profileKey).update({
                        name: profileData.name,
                        password: profileData.password,
                        email: profileData.email,
                        phoneNumber: profileData.phoneNumber,
                        profilePic: profileData.profilePic,
                        isPayment: profileData.isPayment,
                        paymentType: profileData.paymentType,
                        address: data,
                        createdOn: profileData.createdOn,
                      });
                      setLoading(false);
                    }}>
                    <CloseIconPrimary height={3} width={3} />
                  </Pressable>
                </HStack>
              );
            }}
          />
        )}
      </View>

      <LocationList
        data={data}
        onPress={async (i: IPlaces) => {
          await selectedLocation(i);
        }}
        height={55}
      />

      {showBtn && (
        <View mx={5}>
          <PrimaryButton
            onPress={() => selectedLocation({description: searchText})}
            title={'Set custom address'}
            width={widthToDp(90)}
            height={50}
            textFontSize={16}
            marginBottom={40}
            marginTop={5}
          />
        </View>
      )}

      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
export default AddLocationScreen;
const styles = StyleSheet.create({
  mainHeader: {
    marginTop: 10,
    width: widthToDp(100),
    marginLeft: 20,
    // backgroundColor: Colors.tertiary,
  },
  savedText: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: responsiveFontSize(15),
  },
  savedLocation: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: responsiveFontSize(16),
  },

  headingRow: {
    marginTop: 10,
  },

  titleInput: {
    fontSize: responsiveFontSize(16),
    color: Colors.primaryText,
    backgroundColor: Colors.white,
  },
});
