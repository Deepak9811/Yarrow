import {Divider, Input, Modal, Pressable, SearchIcon, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Location from '../assets/svg/Location';
import PrimaryButton from '../components/PrimaryButton';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IPlaces} from '../model/places.model';
import {getPlaces} from '../services/googlePlaces.service';
import {Colors} from '../utils/color';
import {notifyToast} from '../utils/toast';
import AppLoader from './AppLoader';
import LocationList from './LocationList';

interface Props {
  showModal: Function;
  isVisible: boolean;
  onSubmit: Function;
}
const AddLocationModal = (props: Props) => {
  const {showModal, isVisible, onSubmit} = props;
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<IPlaces[]>([]);
  const timeout = useRef(0);
  const [loading, setLoading] = useState(false);
  const [iosLocation, setIosLocation] = useState('second');
  const [locationData, setLocationData] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: `Allow Yarrow to access this devices's location.`,
            message: '',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
        } else {
          console.log('location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      setIosLocation(auth);
      console.log(auth);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const searchLocation = (text: any) => {
    setSearchText(text);

    console.log('text data :-> ', text);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(async () => {
      setLoading(true);
      const d = await getPlaces(text.trim());
      console.log('my address :-.>> ', d);
      // const arr = [
      //   {
      //     description: `${text.trim()}`,
      //     place_id: '1 ',
      //   },
      // ];

      // let find = d.filter(
      //   x =>
      //     x.description.split(',')[0].toLowerCase().trim() ===
      //     text.toLowerCase().trim(),
      // );

      // console.log('joining :=>>>> ', find);

      // let newArr = [...d, arr];

      // if (d[0] !== undefined) {
      setData(d);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      if (text.trim().length === 0) {
        setShowBtn(false);
      } else {
        setShowBtn(true);
      }
      // } else {
      //   // notifyToast('No data found.');
      //   setData(arr);
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 1000);
      // }
    }, 300);
  };

  const locationGet = async () => {
    setLoading(true);
    if (Platform.OS === 'ios') {
      if (iosLocation !== 'granted') {
        return Alert.alert(
          'Alert!',
          `We're unable to connect to your location. Please provide the location access.`,
          [{text: 'Ok'}],
          {cancelable: true},
        );
      }
    }

    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocationData(position);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      },
      error => {
        // See error code charts below.
        console.log('error in location :->> ', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => showModal(false)}
      avoidKeyboard
      justifyContent="flex-end"
      bottom="4"
      size="lg">
      <Modal.Content style={styles.modalContainer}>
        <Divider mt={3} thickness="5" w={20} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
              console.log('text :->> ', text);
              // setSearchText(text);
              searchLocation(text);
            }}
            placeholder="Add Location"
            leftElement={
              <View mx={2}>
                <SearchIcon width={7} height={7} />
              </View>
            }
          />
          <Pressable
            onPress={() => locationGet()}
            style={{
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Location width={6} height={6} />
          </Pressable>
        </View>

        <ScrollView>
          <LocationList
            data={data}
            onPress={(i: IPlaces) => onSubmit(i)}
            height={80}
          />

          {showBtn && (
            <View mx={5}>
              <PrimaryButton
                onPress={() => onSubmit({description: searchText})}
                title={'Set custom address'}
                width={widthToDp(90)}
                height={50}
                textFontSize={16}
                marginBottom={40}
                marginTop={5}
              />
            </View>
          )}
        </ScrollView>
      </Modal.Content>
      {loading && <AppLoader />}
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    width: widthToDp(100),
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 50 : 30,
  },
  titleInput: {
    fontSize: responsiveFontSize(16),
    color: Colors.primaryText,
    backgroundColor: Colors.white,
  },
});
export default AddLocationModal;
