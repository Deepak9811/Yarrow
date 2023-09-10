import database from '@react-native-firebase/database';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {
  FlatList,
  HStack,
  Image,
  Pressable,
  ScaleFade,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIconSecondary from '../assets/svg/BackIconSecondary';
import Calender from '../assets/svg/Calender';
import Elipses from '../assets/svg/Elipses';
import ElipsesBlack from '../assets/svg/ElipsesBlack';
import ElipsesFilled from '../assets/svg/ElipsesFilled';
import Location from '../assets/svg/Location';
import AddLocationModal from '../components/AddLocationModal';
import AppLoader from '../components/AppLoader';
import PrimaryButton from '../components/PrimaryButton';
import {messages} from '../helpers/messages';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {getEmail} from '../helpers/storage';
import {IItem, ISchedule} from '../model/item.model';
import {IPlaces} from '../model/places.model';
import {goBack, navigate} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const ItemDetailScreen = (props: any) => {
  const [itemData, setItemData] = useState<IItem>(props.route.params.data);
  const [showPickUp, setShowPickUp] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [LocationModalFor, setLocationModalFor] = useState('');
  const [schedulePickupAddress, setSchedulePickupAddress] = useState('');
  const [initialPickupAddress, setInitialPickupAddress] = useState('');
  const [scheduleDropAddress, setScheduleDropAddress] = useState('');
  const [scheduleData, setScheduleData] = useState<ISchedule[]>([]);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [itemKey, setItemKey] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('item details :-> ', itemData.id, props.route.params.itemKey);
  useFocusEffect(
    useCallback(() => {
      // setLoading(true);
      getEmail().then(email => {
        database()
          .ref('posts')
          .once('value')
          .then(async (snapshot: any) => {
            if (snapshot.val()) {
              const resp: IItem[] = Object.values(snapshot.val());
              const resp1 = Object.keys(snapshot.val());
              // console.log('resp :->>>>>> ', resp);
              const userPost = resp.filter(
                (item: IItem) => item.id === itemData.id,
              );
              console.log('userPost :->> ', userPost);
              // for delete post
              const index = resp.indexOf(userPost[0]);
              // setItemData(index);
              console.log('resp1[index] :->> ', index, resp1[index]);
              setItemKey(resp1[index]);
              // await database().ref('posts').child(resp1[index]).remove();
              // console.log('resp1[index] :->> ', userPost[0]);
              // return;

              // const requested = userPost.filter(
              //   val => new Date(val.initialPickupTime) > new Date(),
              // );
            }
          });
      });
    }, []),
  );

  const updateData = async () => {
    if (schedulePickupAddress && scheduleDropAddress) {
      setLoading(true);
      const obj = {
        id: scheduleData.length + 1,
        pickUpAddress: schedulePickupAddress,
        dropAddress: scheduleDropAddress,
      };
      const newData = [...scheduleData, obj];
      // setItemData(newData);

      // setScheduleData(newData);

      const data = {
        id: itemData.id,
        itemName: itemData.itemName,
        createdOn: itemData.createdOn,
        initialPickupAddress: itemData.initialPickupAddress,
        initialPickupTime: itemData.initialPickupTime.toString(),
        createdBy: itemData.createdBy,
        images: itemData.images,
        scheduleRoutine: newData,
        additionalNote: itemData.additionalNote,
      };
      // console.log('new data :->> ', data);
      setItemData(data);
      // return;
      await database().ref('posts').child(itemKey).update(data);
      setTimeout(() => {
        setLoading(false);
        setShowSaveBtn(false);
        setShowPickUp(false);
        setScheduleDropAddress('');
        setSchedulePickupAddress('');
      }, 1000);
    } else {
      notifyToast(messages.requiredFieldsMissing);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={itemData.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <Image source={{uri: item.item}} style={styles.pic} alt={'pic'} />
          )}
        />
        <HStack style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => goBack()}>
            <BackIconSecondary width={4} height={4} />
          </Pressable>
        </HStack>
      </View>

      <ScrollView mx={5} mt={3} height={heightToDp(60)}>
        {/* <Text style={styles.id}>#{itemData.id}</Text> */}
        <Text style={styles.title}>{itemData.itemName}</Text>
        <View style={styles.line} />

        <HStack my={3} justifyContent={'space-between'} mx={5}>
          <HStack>
            <View justifyContent={'center'} mr={2}>
              <Calender width={6} height={6} />
            </View>
            <View>
              <Text style={styles.initialDate}>Initial Date</Text>
              <Text style={styles.date}>
                {moment(itemData.initialPickupTime).format('DD MMM YYYY')}
              </Text>
            </View>
          </HStack>
          <HStack>
            <View justifyContent={'center'} mr={2}>
              <Location width={6} height={6} />
            </View>
            <View>
              <Text style={styles.initialDate}>Initial Address</Text>
              <Text style={styles.date}>{itemData.initialPickupAddress}</Text>
            </View>
          </HStack>
        </HStack>
        <View style={styles.line} />

        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <PrimaryButton
            onPress={async () => {
              setShowPickUp(!showPickUp);

              // updateData();
            }}
            title={'Address'}
            width={widthToDp(40)}
            height={10}
            textFontSize={15}
            marginBottom={5}
            marginTop={5}
            showArrow={showPickUp}
            hideArrow={true}
          />
          {showSaveBtn && (
            <PrimaryButton
              onPress={async () => {
                updateData();
              }}
              title={'Save'}
              width={widthToDp(40)}
              height={10}
              textFontSize={16}
              marginBottom={5}
              marginTop={5}
              // showArrow={showPickUp}
              // hideArrow={true}
            />
          )}
        </View>

        {showPickUp && (
          <>
            <Pressable
              onPress={() => {
                setShowLocationModal(true);
                setLocationModalFor('SchedulePickup');
              }}
              style={styles.datePickerButton}>
              <Text color={Colors.secondaryText}>
                {schedulePickupAddress || 'Pick up address'}
              </Text>
            </Pressable>

            {schedulePickupAddress !== '' && (
              <Pressable
                mt={5}
                onPress={() => {
                  setShowLocationModal(true);
                  setLocationModalFor('ScheduleDrop');
                  setTimeout(() => {
                    setShowSaveBtn(true);
                  }, 500);
                }}
                style={styles.datePickerButton}>
                <Text color={Colors.secondaryText}>
                  {scheduleDropAddress || 'Drop off address'}
                </Text>
              </Pressable>
            )}
          </>
        )}

        {itemData.scheduleRoutine ? (
          <>
            <Text style={styles.subHeadings} my={5}>
              Schedule Routine
            </Text>

            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 0.7, y: 0.9}}
              locations={[0, 1]}
              colors={[Colors.background1, Colors.background2]}
              style={styles.scheduleContainer}>
              <Text style={styles.pickup}>Pickups</Text>
              {itemData.scheduleRoutine.map(item => (
                <View key={item.id}>
                  <HStack mt={3} ml={2}>
                    <Calender width={5} height={5} />
                    <Text style={styles.initialDate} ml={2}>
                      {moment(item.pickUpTime).format('dddd')}
                    </Text>
                  </HStack>
                  <VStack ml={10}>
                    <HStack mt={2}>
                      <Text style={styles.initialDate}>Pick at: </Text>
                      <Text style={styles.scheduleTime}>
                        {moment(item.pickUpTime).format('hh:mm a, ') +
                          item.pickUpAddress}
                      </Text>
                    </HStack>
                    <HStack mt={2}>
                      <Text style={styles.initialDate}>Drop at: </Text>
                      <Text style={styles.scheduleTime}>
                        {moment(item.dropTime).format('hh:mm a, ') +
                          item.dropAddress}
                      </Text>
                    </HStack>
                  </VStack>
                </View>
              ))}
            </LinearGradient>
          </>
        ) : null}

        <Text style={styles.subHeadings} my={5}>
          Activities
        </Text>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 0.7, y: 0.9}}
          locations={[0, 1]}
          colors={[Colors.background1, Colors.background2]}
          style={styles.scheduleContainer}>
          <Text style={styles.pickup}>
            Picked
            {/* by John Doe */}
          </Text>

          <>
            {new Date(itemData.initialPickupTime) <= new Date() ? (
              <Pressable
                ml={5}
                mt={2}
                onPress={() =>
                  navigate(Screens.activity, {
                    data: {
                      title: `Picked by Michel at ${itemData.initialPickupAddress}`,
                      id: itemData.id,
                    },
                  })
                }>
                <HStack alignItems={'center'}>
                  <ElipsesFilled width={4} height={4} />
                  <Text ml={4} style={styles.activityHeading}>
                    Picked by Michel at {itemData.initialPickupAddress}
                  </Text>
                </HStack>
                <Text ml={8} mt={1} style={styles.activityTime}>
                  {moment(itemData.initialPickupTime).format(
                    'DD MMM YYYY, hh:mm',
                  )}
                </Text>

                <View
                  style={{
                    // borderColor: 'red',
                    // borderStyle: 'dotted',
                    // borderWidth: 1,
                    position: 'absolute',
                    transform: [{rotate: '90deg'}],
                    flexDirection: 'column',
                    // width: '16%',
                    // // borderBottomWidth: 1,
                    // // flexDirection: 'column',
                    // // position: 'absolute',
                    // // transform: [{rotate: '90deg'}],
                    top: '33%',
                    // height: 1,
                    left: '-8%',
                  }}>
                  <Text ellipsizeMode="clip" numberOfLines={1}>
                    ----------
                  </Text>
                </View>
                <HStack alignItems={'center'} mt={8}>
                  <ElipsesBlack width={4} height={4} />
                  <Text ml={4} style={styles.activityHeading}>
                    Requested Pickup
                  </Text>
                </HStack>
                <Text ml={8} mt={1} style={styles.activityTime}>
                  {moment(itemData.initialPickupTime).format(
                    'DD MMM YYYY, hh:mm',
                  )}
                </Text>
              </Pressable>
            ) : null}

            {new Date(itemData.initialPickupTime) > new Date() ? (
              <Pressable
                ml={5}
                mt={2}
                onPress={() =>
                  navigate(Screens.activity, {
                    data: {
                      title: 'Requested Pickup',
                      id: itemData.id,
                    },
                  })
                }>
                <HStack alignItems={'center'}>
                  <Elipses width={4} height={4} />
                  <Text ml={4} style={styles.activityHeading}>
                    Requested Pickup
                  </Text>
                </HStack>
                <Text ml={8} mt={1} style={styles.activityTime}>
                  {moment(itemData.initialPickupTime).format(
                    'DD MMM YYYY, hh:mm',
                  )}
                </Text>
                <View
                  style={{
                    // borderColor: 'red',
                    // borderStyle: 'dotted',
                    // borderWidth: 1,
                    position: 'absolute',
                    transform: [{rotate: '90deg'}],
                    flexDirection: 'column',
                    // width: '16%',
                    // // borderBottomWidth: 1,
                    // // flexDirection: 'column',
                    // // position: 'absolute',
                    // // transform: [{rotate: '90deg'}],
                    top: '33%',
                    // height: 1,
                    left: '-8%',
                  }}>
                  <Text ellipsizeMode="clip" numberOfLines={1}>
                    ----------
                  </Text>
                </View>
                <HStack alignItems={'center'} mt={8}>
                  <ElipsesBlack width={4} height={4} />
                  <Text ml={4} style={styles.activityHeading}>
                    Requested Pickup
                  </Text>
                </HStack>
                <Text ml={8} mt={1} style={styles.activityTime}>
                  {moment(itemData.initialPickupTime).format(
                    'DD MMM YYYY, hh:mm',
                  )}
                </Text>
              </Pressable>
            ) : null}
          </>
        </LinearGradient>

        {itemData.scheduleRoutine ? (
          <>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 0.7, y: 0.9}}
              locations={[0, 1]}
              colors={[Colors.background1, Colors.background2]}
              style={styles.scheduleContainer}>
              <Text style={styles.pickup}>
                Picked
                {/* by John Doe */}
              </Text>
              {itemData.scheduleRoutine.map((item, i) => (
                <React.Fragment key={i}>
                  <>
                    {/* {new Date(item.pickUpTime) <= new Date() ? ( */}
                    <Pressable
                      ml={5}
                      mt={2}
                      onPress={() =>
                        navigate(Screens.activity, {
                          data: {
                            title: `Picked by Michel at ${item.pickUpAddress}`,
                            id: itemData.id,
                          },
                        })
                      }>
                      <HStack alignItems={'center'}>
                        <ElipsesFilled width={4} height={4} />
                        <Text ml={4} style={styles.activityHeading}>
                          Picked by Michel at {item.pickUpAddress}
                        </Text>
                      </HStack>
                      {/* <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text> */}
                      <View
                        style={{
                          // borderColor: 'red',
                          // borderStyle: 'dotted',
                          // borderWidth: 1,
                          position: 'absolute',
                          transform: [{rotate: '90deg'}],
                          flexDirection: 'column',
                          // width: '16%',
                          // // borderBottomWidth: 1,
                          // // flexDirection: 'column',
                          // // position: 'absolute',
                          // // transform: [{rotate: '90deg'}],
                          top: '33%',
                          // height: 1,
                          left: '-8%',
                        }}>
                        <Text ellipsizeMode="clip" numberOfLines={1}>
                          ----------
                        </Text>
                      </View>
                      <HStack alignItems={'center'} mt={8}>
                        <ElipsesBlack width={4} height={4} />
                        <Text ml={4} style={styles.activityHeading}>
                          Requested Pickup
                        </Text>
                      </HStack>
                      {/* <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text> */}
                    </Pressable>
                    {/* ) : null} */}

                    {new Date(item.pickUpTime) > new Date() ? (
                      <Pressable
                        ml={5}
                        mt={2}
                        onPress={() =>
                          navigate(Screens.activity, {
                            data: {
                              title: `Requested Pickup`,
                              id: itemData.id,
                            },
                          })
                        }>
                        <HStack alignItems={'center'}>
                          <Elipses width={4} height={4} />
                          <Text ml={4} style={styles.activityHeading}>
                            Requested Pickup
                          </Text>
                        </HStack>
                        <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text>
                        <View
                          style={{
                            // borderColor: 'red',
                            // borderStyle: 'dotted',
                            // borderWidth: 1,
                            position: 'absolute',
                            transform: [{rotate: '90deg'}],
                            flexDirection: 'column',
                            // width: '16%',
                            // // borderBottomWidth: 1,
                            // // flexDirection: 'column',
                            // // position: 'absolute',
                            // // transform: [{rotate: '90deg'}],
                            top: '33%',
                            // height: 1,
                            left: '-8%',
                          }}>
                          <Text ellipsizeMode="clip" numberOfLines={1}>
                            ----------
                          </Text>
                        </View>
                        <HStack alignItems={'center'} mt={8}>
                          <ElipsesBlack width={4} height={4} />
                          <Text ml={4} style={styles.activityHeading}>
                            Requested Pickup
                          </Text>
                        </HStack>
                        <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text>
                      </Pressable>
                    ) : null}
                  </>
                </React.Fragment>
              ))}
            </LinearGradient>

            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 0.7, y: 0.9}}
              locations={[0, 1]}
              colors={[Colors.background1, Colors.background2]}
              style={styles.scheduleContainer}>
              <Text style={styles.pickup}>
                Dropped off
                {/* by John Doe */}
              </Text>
              {itemData.scheduleRoutine.map((item, i) => (
                <React.Fragment key={i}>
                  <>
                    {/* {new Date(item.dropTime) <= new Date() ? ( */}
                    <Pressable
                      ml={5}
                      mt={2}
                      onPress={() =>
                        navigate(Screens.activity, {
                          data: {
                            title: `Dropped by Michel at ${item.dropAddress}`,
                            id: itemData.id,
                          },
                        })
                      }>
                      <HStack alignItems={'center'}>
                        <ElipsesFilled width={4} height={4} />
                        <Text ml={4} style={styles.activityHeading}>
                          Dropped {item.dropAddress}
                        </Text>
                      </HStack>
                      {/* <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.dropTime).format('DD MMM YYYY, hh:mm')}
                        </Text> */}
                      <View
                        style={{
                          // borderColor: 'red',
                          // borderStyle: 'dotted',
                          // borderWidth: 1,
                          position: 'absolute',
                          transform: [{rotate: '90deg'}],
                          flexDirection: 'column',
                          // width: '16%',
                          // // borderBottomWidth: 1,
                          // // flexDirection: 'column',
                          // // position: 'absolute',
                          // // transform: [{rotate: '90deg'}],
                          top: '33%',
                          // height: 1,
                          left: '-8%',
                        }}>
                        <Text ellipsizeMode="clip" numberOfLines={1}>
                          ----------
                        </Text>
                      </View>
                      <HStack alignItems={'center'} mt={8}>
                        <ElipsesBlack width={4} height={4} />
                        <Text ml={4} style={styles.activityHeading}>
                          Requested Pickup
                        </Text>
                      </HStack>
                      {/* <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text> */}
                    </Pressable>
                    {/* ) : null} */}

                    {new Date(item.pickUpTime) > new Date() ? (
                      <Pressable
                        ml={5}
                        mt={2}
                        onPress={() =>
                          navigate(Screens.activity, {
                            data: {
                              title: `Requested Drop off`,
                              id: itemData.id,
                            },
                          })
                        }>
                        <HStack alignItems={'center'}>
                          <Elipses width={4} height={4} />
                          <Text ml={4} style={styles.activityHeading}>
                            Requested Drop off
                          </Text>
                        </HStack>
                        <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.dropTime).format('DD MMM YYYY, hh:mm')}
                        </Text>
                        <View
                          style={{
                            // borderColor: 'red',
                            // borderStyle: 'dotted',
                            // borderWidth: 1,
                            position: 'absolute',
                            transform: [{rotate: '90deg'}],
                            flexDirection: 'column',
                            // width: '16%',
                            // // borderBottomWidth: 1,
                            // // flexDirection: 'column',
                            // // position: 'absolute',
                            // // transform: [{rotate: '90deg'}],
                            top: '33%',
                            // height: 1,
                            left: '-8%',
                          }}>
                          <Text ellipsizeMode="clip" numberOfLines={1}>
                            ----------
                          </Text>
                        </View>
                        <HStack alignItems={'center'} mt={8}>
                          <ElipsesBlack width={4} height={4} />
                          <Text ml={4} style={styles.activityHeading}>
                            Requested Pickup
                          </Text>
                        </HStack>
                        <Text ml={8} mt={1} style={styles.activityTime}>
                          {moment(item.pickUpTime).format('DD MMM YYYY, hh:mm')}
                        </Text>
                      </Pressable>
                    ) : null}
                  </>
                </React.Fragment>
              ))}
            </LinearGradient>
          </>
        ) : null}
      </ScrollView>

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
  pic: {
    width: widthToDp(100),
    height: heightToDp(30),
  },
  buttons: {
    width: widthToDp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 10,
  },
  button: {
    height: widthToDp(10),
    width: widthToDp(10),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black20,
  },
  id: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    color: Colors.primaryText,
    lineHeight: 24,
  },
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(23),
    fontWeight: '600',
    color: Colors.primaryText,
    lineHeight: 33,
  },
  line: {
    marginTop: 10,
    height: 1,
    width: '100%',
    backgroundColor: Colors.borderColor,
  },
  initialDate: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    color: Colors.primaryText,
    lineHeight: 20,
  },
  pickup: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '500',
    color: Colors.primaryText,
    lineHeight: 20,
  },
  date: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(13),
    fontWeight: '400',
    color: Colors.secondaryText,
    lineHeight: 23,
  },
  subHeadings: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: Colors.primaryText,
    lineHeight: 20,
  },
  scheduleContainer: {
    marginTop: 10,
    padding: 20,

    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    // height: 200,
  },
  scheduleTime: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(13),
    fontWeight: '400',
    color: Colors.secondaryText,
    lineHeight: 20,
    paddingRight: 40,
  },
  activityHeading: {
    fontSize: responsiveFontSize(13),
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.primaryText,
  },
  activityTime: {
    fontSize: responsiveFontSize(13),
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.secondaryText,
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
});
export default ItemDetailScreen;
