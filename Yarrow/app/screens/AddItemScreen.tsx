import database from '@react-native-firebase/database';
import moment from 'moment';
import {
  Divider,
  FlatList,
  HStack,
  Image,
  Input,
  Modal,
  Pressable,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import uuid from 'react-native-uuid';
import AddBlack from '../assets/svg/AddBlack';
import Calender from '../assets/svg/Calender';
import Delete from '../assets/svg/Delete';
import Gallery from '../assets/svg/Gallery';
import AddLocationModal from '../components/AddLocationModal';
import AppLoader from '../components/AppLoader';
import CustomAppBar from '../components/CustomAppBar';
import PrimaryButton from '../components/PrimaryButton';
import {openCamera, openGallery} from '../helpers/cameraHelperFunctions';
import {messages} from '../helpers/messages';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {getEmail} from '../helpers/storage';
import {uploadImage} from '../helpers/uploadImage';
import {ISchedule} from '../model/item.model';
import {IPlaces} from '../model/places.model';
import {goBack} from '../services/navigationRef';
import {store} from '../store';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const AddItemScreen = () => {
  const [itemName, setItemName] = useState('');
  const [initialPickupTime, setInitialPickupTime] = useState(new Date());
  const [initialPickupTimeModal, setInitialPickupTimeModal] = useState(false);
  const [initialPickupAddress, setInitialPickupAddress] = useState('');
  const [additionalNote, setAdditionalNote] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [schedulePickupTime, setSchedulePickupTime] = useState(new Date());
  const [schedulePickupTimeModal, setSchedulePickupTimeModal] = useState(false);
  const [schedulePickupAddress, setSchedulePickupAddress] = useState('');
  const [scheduleDropTime, setScheduleDropTime] = useState(new Date());
  const [scheduleDropTimeModal, setScheduleDropTimeModal] = useState(false);
  const [scheduleDropAddress, setScheduleDropAddress] = useState('');
  const [scheduleData, setScheduleData] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(false);
  const [onSkip, setOnSkip] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [LocationModalFor, setLocationModalFor] = useState('');
  const {itemCount, paymentType} = store;

  const onSave = async () => {
    console.log('itemCount :->> ', itemCount, paymentType);
    if (paymentType) {
      let count;

      if (paymentType === 'premium') {
        count = 7;
      } else {
        count = 3;
      }

      console.log('count :->> ', count);

      // return;

      if (itemCount <= count) {
        console.log('first');
        const email = await getEmail();
        if (
          itemName &&
          initialPickupAddress &&
          initialPickupTime &&
          imageUrl &&
          email
        ) {
          setLoading(true);
          const ref = database().ref('posts');
          const time = new Date().toUTCString();

          const data = {
            id: uuid.v4(),
            itemName,
            createdOn: time,
            initialPickupAddress: initialPickupAddress,
            initialPickupTime: initialPickupTime.toString(),
            createdBy: email,
            images: imageUrl,
            scheduleRoutine: scheduleData,
            additionalNote: additionalNote,
          };

          console.log('add item data:->>> ', data);

          ref.push(data);

          setTimeout(() => {
            notifyToast('Successfully uploaded');
            setLoading(false);
            goBack();
          }, 1000);
        } else {
          notifyToast(messages.requiredFieldsMissing);
        }
      } else {
        notifyToast(`you can only add ${count} items for pickups`);
      }
    } else {
      notifyToast('Please choose a membership to upgrade an item.');
    }
  };

  return (
    <SafeAreaView>
      <CustomAppBar title={'Add an item'} />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.subHeadings}>Image of item</Text>
        <View style={styles.uploadImage}>
          <Pressable
            width={widthToDp(15)}
            height={widthToDp(15)}
            onPress={() => setModalVisible(true)}>
            <Gallery width={15} height={15} />
            <View style={styles.addIcon}>
              <AddBlack width={6} height={6} />
            </View>

            {imageUrl.length === 0 && (
              <>
                <Text
                  style={{
                    width: 500,
                    marginLeft: -15,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Upload Photo
                </Text>
                <Text
                  style={{width: 300, marginLeft: -70}}
                  color={Colors.secondaryText}>
                  File format png, jpg, jpeg. Max 2mb
                </Text>
              </>
            )}
          </Pressable>

          {imageUrl.length > 0 ? (
            <FlatList
              data={imageUrl}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={item => (
                <Image
                  source={{uri: item.item}}
                  alt={'x'}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 5,
                    marginLeft: 10,
                  }}
                />
              )}
              keyExtractor={item => item}
            />
          ) : null}
        </View>
        <Text mt={5} style={styles.subHeadings}>
          Item detail
        </Text>
        <Input
          mt={5}
          borderRadius={8}
          borderColor={Colors.borderColor}
          style={styles.input}
          placeholder={'Name of item*'}
          placeholderTextColor={Colors.secondaryText}
          fontSize={responsiveFontSize(14)}
          value={itemName}
          onChangeText={text => setItemName(text)}
          height={50}
        />
        <Text mt={5} color={Colors.secondaryText}>
          Select Initial Pickup Date & Time
        </Text>

        <Pressable
          mt={2}
          style={styles.datePickerButton}
          onPress={() => setInitialPickupTimeModal(true)}>
          <Text color={Colors.primaryText}>
            {moment(initialPickupTime).format('DD MMM YYYY hh:mm a')}
          </Text>
          <View mr={4}>
            <Calender width={5} height={5} />
          </View>
        </Pressable>

        <DatePicker
          modal
          minimumDate={new Date()}
          open={initialPickupTimeModal}
          date={initialPickupTime}
          onConfirm={date => {
            console.log(date);
            setInitialPickupTimeModal(false);
            setInitialPickupTime(date);
          }}
          onCancel={() => {
            setInitialPickupTimeModal(false);
          }}
          mode="datetime"
        />
        <Pressable
          onPress={() => {
            setShowLocationModal(true);
            setLocationModalFor('InitialPickup');
          }}
          mt={2}
          style={styles.datePickerButton}>
          <Text color={Colors.secondaryText}>
            {initialPickupAddress || 'Initial Pick up address'}
          </Text>
        </Pressable>

        <Input
          mt={5}
          borderRadius={8}
          borderColor={Colors.borderColor}
          style={styles.input}
          placeholder={'Additional Note to warehouse'}
          placeholderTextColor={Colors.secondaryText}
          fontSize={responsiveFontSize(14)}
          value={additionalNote}
          onChangeText={text => setAdditionalNote(text)}
          height={100}
          multiline
        />

        {/* {!onSkip ? (
          <>
            <HStack mt={5} justifyContent={'space-between'}>
              <Text style={styles.subHeadings}>
                Schedule Routine Deliveries
              </Text>
              <Text
                style={styles.primarySubHeading}
                onPress={() => setOnSkip(true)}>
                Skip
              </Text>
            </HStack>
            <View style={styles.scheduleContainer}>
              <Text mt={5} color={Colors.secondaryText}>
                Pick up Date & Time
              </Text>
              <Pressable
                mt={2}
                style={styles.datePickerButton}
                onPress={() => setSchedulePickupTimeModal(true)}>
                <Text color={Colors.primaryText}>
                  {moment(schedulePickupTime).format('DD MMM YYYY hh:mm a')}
                </Text>
                <View mr={4}>
                  <Calender width={5} height={5} />
                </View>
              </Pressable>
              <DatePicker
                modal
                minimumDate={new Date()}
                open={schedulePickupTimeModal}
                date={schedulePickupTime}
                onConfirm={date => {
                  console.log(date);
                  setSchedulePickupTimeModal(false);
                  setSchedulePickupTime(date);
                }}
                onCancel={() => {
                  setInitialPickupTimeModal(false);
                }}
                mode="datetime"
              />

              <Pressable
                onPress={() => {
                  setShowLocationModal(true);
                  setLocationModalFor('SchedulePickup');
                }}
                mt={2}
                style={styles.datePickerButton}>
                <Text color={Colors.secondaryText}>
                  {schedulePickupAddress || 'Pick up address'}
                </Text>
              </Pressable>

              <Text mt={5} color={Colors.secondaryText}>
                Drop off Date & Time
              </Text>
              <Pressable
                mt={2}
                style={styles.datePickerButton}
                onPress={() => setScheduleDropTimeModal(true)}>
                <Text color={Colors.primaryText}>
                  {moment(scheduleDropTime).format('DD MMM YYYY hh:mm a')}
                </Text>
                <View mr={4}>
                  <Calender width={5} height={5} />
                </View>
              </Pressable>
              <DatePicker
                modal
                minimumDate={new Date()}
                open={scheduleDropTimeModal}
                date={scheduleDropTime}
                onConfirm={date => {
                  console.log(date);
                  setScheduleDropTimeModal(false);
                  setScheduleDropTime(date);
                }}
                onCancel={() => {
                  setInitialPickupTimeModal(false);
                }}
                mode="datetime"
              />
              <Pressable
                onPress={() => {
                  setShowLocationModal(true);
                  setLocationModalFor('ScheduleDrop');
                }}
                mt={2}
                style={styles.datePickerButton}>
                <Text color={Colors.secondaryText}>
                  {scheduleDropAddress || 'Drop off address'}
                </Text>
              </Pressable>
              <Text
                mt={5}
                style={styles.primarySubHeading}
                onPress={() => {
                  if (
                    schedulePickupTime &&
                    schedulePickupAddress &&
                    scheduleDropTime &&
                    scheduleDropAddress
                  ) {
                    const obj = {
                      id: scheduleData.length + 1,
                      pickUpTime: schedulePickupTime.toString(),
                      pickUpAddress: schedulePickupAddress,
                      dropTime: scheduleDropTime.toString(),
                      dropAddress: scheduleDropAddress,
                    };
                    const newData = [...scheduleData, obj];
                    console.log('obj :->> ', obj, scheduleData);
                    console.log('newData :->> ', newData);
                    setScheduleData(newData);
                    setScheduleDropAddress('');
                    setScheduleDropTime(new Date());
                    setSchedulePickupAddress('');
                    setSchedulePickupTime(new Date());
                  } else {
                    notifyToast(messages.requiredFieldsMissing);
                  }
                }}>
                + Add New Pick Up & Drop Off
              </Text>
            </View>
          </>
        ) : null} */}

        {scheduleData.length > 0 ? (
          <>
            <Text mt={5} style={styles.subHeadings} mb={3}>
              Added Schedule Routine
            </Text>
            <HStack
              borderTopWidth={1}
              borderLeftWidth={1}
              borderRightWidth={1}
              py={2}
              borderColor={Colors.borderColor}
              borderRadius={5}
              alignItems={'center'}>
              <Text style={styles.scheduleRoutineHeading}>Pick Up Address</Text>
              <Text style={styles.scheduleRoutineHeading}>Pick up time</Text>
              <Text style={styles.scheduleRoutineHeading}>Drop of Address</Text>
              <Text style={styles.scheduleRoutineHeading}>Drop off time</Text>
            </HStack>
            {scheduleData.map(item => (
              <HStack
                py={2}
                borderWidth={1}
                borderRadius={5}
                borderColor={Colors.borderColor}
                alignItems={'center'}
                key={item.id}>
                <Text style={styles.scheduleRoutineText} noOfLines={2}>
                  {item.pickUpAddress}
                </Text>
                <Text style={styles.scheduleRoutineText} noOfLines={2}>
                  {moment(item.pickUpTime).format('DD/MM/YY hh:mm a')}
                </Text>
                <Text style={styles.scheduleRoutineText} noOfLines={2}>
                  {item.dropAddress}
                </Text>
                <Text style={styles.scheduleRoutineText} noOfLines={2}>
                  {moment(item.dropTime).format('DD/MM/YY hh:mm a')}
                </Text>
                <Pressable
                  ml={5}
                  onPress={() => {
                    const newData = scheduleData.filter(
                      val => val.id !== item.id,
                    );
                    setScheduleData(newData);
                  }}>
                  <Delete width={5} height={5} />
                </Pressable>
              </HStack>
            ))}
          </>
        ) : null}
        <PrimaryButton
          onPress={async () => await onSave()}
          title={'Save Item'}
          width={widthToDp(90)}
          height={50}
          textFontSize={16}
          marginBottom={40}
          marginTop={5}
        />
      </KeyboardAwareScrollView>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg">
        <Modal.Content style={styles.modalBodyContainer}>
          <Divider mt={3} thickness="5" w={20} />
          <Pressable
            mt={3}
            style={styles.modalBtn}
            onPress={async () => {
              setModalVisible(false);
              const galleryData = await openGallery();
              console.log(galleryData);
              if (galleryData) {
                setLoading(true);

                const url = await uploadImage(
                  galleryData.uri,
                  galleryData.fileName,
                );
                setImageUrl([...imageUrl, url]);
                setLoading(false);
              }
            }}>
            <Text style={styles.modalBtnTxt}>Upload from gallery</Text>
          </Pressable>

          <Pressable
            mb={3}
            style={styles.modalBtn}
            onPress={async () => {
              setModalVisible(false);
              const cameraData = await openCamera();
              console.log(cameraData);
              if (cameraData) {
                setLoading(true);
                const url = await uploadImage(
                  cameraData.uri,
                  cameraData.fileName,
                );
                setImageUrl([...imageUrl, url]);
                setLoading(false);
              }
            }}>
            <Text style={styles.modalBtnTxt}>Take picture</Text>
          </Pressable>
        </Modal.Content>
      </Modal>

      <AddLocationModal
        showModal={(val: boolean) => setShowLocationModal(val)}
        isVisible={showLocationModal}
        onSubmit={(location: IPlaces) => {
          if (LocationModalFor === 'InitialPickup')
            setInitialPickupAddress(location.description);
          else if (LocationModalFor === 'SchedulePickup')
            setSchedulePickupAddress(location.description);
          else setScheduleDropAddress(location.description);
          setLocationModalFor('');
          setShowLocationModal(false);
        }}
      />

      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    height: heightToDp(89),
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  subHeadings: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: Colors.primaryText,

    lineHeight: 20,
  },
  uploadImage: {
    width: widthToDp(90),
    height: 178,
    borderWidth: 2.5,
    borderStyle: 'dotted',
    borderColor: Colors.borderColor,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addIcon: {
    position: 'absolute',
    left: widthToDp(4.5),
    top: widthToDp(4.5),
  },
  input: {
    // borderWidth: 1,
    borderColor: Colors.borderColor,
    width: widthToDp(90),
  },
  modalBodyContainer: {
    width: widthToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Colors.borderColor,
    height: heightToDp(7),
  },
  modalBtnTxt: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: responsiveFontSize(18),
    color: Colors.primary,
  },
  primarySubHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: Colors.primary,

    lineHeight: 20,
  },
  scheduleContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    marginTop: 10,
  },
  datePickerButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.borderColor,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  scheduleRoutineHeading: {
    width: '22%',
    textAlign: 'center',
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    color: Colors.primary,
  },
  scheduleRoutineText: {
    width: '22%',
    textAlign: 'center',
    color: Colors.primaryText,
    fontFamily: Fonts.PoppinsRegular,
  },
});
export default AddItemScreen;
