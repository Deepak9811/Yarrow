import database from '@react-native-firebase/database';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {FlatList, HStack, Pressable, ScrollView, Text, View} from 'native-base';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../assets/svg/Box';
import Notification from '../assets/svg/Notification';
import AppLoader from '../components/AppLoader';
import EmptyStateComponent from '../components/EmptyStateComponent';
import HomeSingleItem from '../components/HomeSingleItem';
import PrimaryButton from '../components/PrimaryButton';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {getEmail} from '../helpers/storage';
import {IItem} from '../model/item.model';
import {navigate} from '../services/navigationRef';
import {store} from '../store';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IItem[]>([]);
  const [requestedPickupPosts, setRequestedPickupPosts] = useState<IItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
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
                (item: IItem) => item.createdBy === email,
              );
              console.log('userPost :->> ', store.subscription);
              // for delete post
              // const index = resp.indexOf(userPost[0]);
              // console.log('resp1[index] :->> ', index, resp1[index]);
              // await database().ref('posts').child(resp1[index]).remove();
              // console.log('resp1[index] :->> ', userPost[0]);
              // return;

              if (store.paymentType !== '') {
                store.updateItemCount(userPost.length);
                setPosts(userPost);
                const requested = userPost.filter(
                  val => new Date(val.initialPickupTime) > new Date(),
                );
                // console.log('inital item :->>>');
                setRequestedPickupPosts(requested);
              } else {
                setPosts([]);
                setRequestedPickupPosts([]);
              }
            }
            setLoading(false);
          });
      });
    }, []),
  );

  const statusCircle = (value, color) => {
    // console.log(
    //   'value.toString   :->>>>>>>>>>>>>>> ',
    //   `${value.toString()}%`,
    //   color,
    // );
    return (
      <View
        style={{
          borderRadius: 100,
          borderColor: '#fff',
          borderWidth: 1,
          width: 10,
          height: 10,
          zIndex: 99999,
          left: `${value.toString() + '%'}`,
          position: 'absolute',
          bottom: 5,
          backgroundColor: color,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <HStack style={styles.appBar}>
        <View>
          <Text style={styles.dateText}>{moment().format('DD MMM, YYYY')}</Text>
          <Text style={styles.heading}>How are you today?</Text>
        </View>
        {/* <Pressable
          onPress={() => navigate(Screens.notification)}
          style={{marginTop: -20}}>
          <Notification height={6} width={6} />
        </Pressable> */}
      </HStack>
      <View style={styles.curvedContainer}>
        <LinearGradient
          start={{x: 0.5, y: 0.2}}
          end={{x: 0.5, y: 1}}
          locations={[0.3, 0.8]}
          colors={[Colors.inActive, Colors.borderColor]}
          style={styles.itemStoredContainer}>
          <Text style={styles.subHeading}>Items Stored</Text>
          {store.paymentType === 'premium' ? (
            <View my={5}>
              <HStack justifyContent={'space-between'} mb={2}>
                <Box width={8} height={8} />
                <Box width={8} height={8} />
                <Box width={8} height={8} />
                <Box width={8} height={8} />
                <Box width={8} height={8} />
                <Box width={8} height={8} />
                <Box width={8} height={8} />
              </HStack>
              {statusCircle(
                4,
                store.itemCount >= 1 ? 'black' : Colors.inActive,
              )}
              {statusCircle(
                19,
                store.itemCount >= 2 ? 'black' : Colors.inActive,
              )}
              {statusCircle(
                34,
                store.itemCount >= 3 ? 'black' : Colors.inActive,
              )}
              {statusCircle(
                48,
                store.itemCount >= 4 ? 'black' : Colors.inActive,
              )}
              {statusCircle(
                62,
                store.itemCount >= 5 ? 'black' : Colors.inActive,
              )}

              <View
                style={{
                  borderRadius: 100,
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: 10,
                  height: 10,
                  // marginTop: 10,
                  // marginBottom: -12,
                  zIndex: 99999,
                  right: '19%',
                  position: 'absolute',
                  bottom: 5,
                  backgroundColor:
                    store.itemCount >= 6 ? 'black' : Colors.inActive,
                }}
              />

              <View
                style={{
                  borderRadius: 100,
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: 10,
                  height: 10,
                  // marginTop: 10,
                  // marginBottom: -12,
                  zIndex: 99999,
                  right: '5%',
                  position: 'absolute',
                  bottom: 5,
                  backgroundColor:
                    store.itemCount >= 7 ? 'black' : Colors.inActive,
                }}
              />
              <View style={styles.boxLine} />
            </View>
          ) : (
            <View my={5}>
              <HStack justifyContent={'space-between'}>
                <Box width={15} height={15} />
                <Box width={15} height={15} />
                <Box width={15} height={15} />
              </HStack>
              {statusCircle(
                10,
                store.itemCount >= 1 ? 'black' : Colors.inActive,
              )}
              {statusCircle(
                48,
                store.itemCount >= 2 ? 'black' : Colors.inActive,
              )}
              {/* {statusCircle(10)} */}

              <View
                style={{
                  borderRadius: 100,
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: 10,
                  height: 10,
                  // marginTop: 10,
                  // marginBottom: -12,
                  zIndex: 99999,
                  right: '10%',
                  position: 'absolute',
                  bottom: 5,
                  backgroundColor:
                    store.itemCount >= 3 ? 'black' : Colors.inActive,
                }}
              />
              <View style={styles.boxLine} />
            </View>
          )}

          <HStack>
            <Text style={styles.outOf}>
              <Text style={styles.subHeading}>{store.itemCount}</Text>
              {' out of '}
              <Text style={styles.subHeading}>
                {store.paymentType === 'premium' ? 7 : 3}
              </Text>
              <Text style={styles.items}>{' items'}</Text>
            </Text>
            {store.paymentType === '' && (
              <PrimaryButton
                onPress={() => navigate(Screens.buyPremium)}
                title={'Upgrade to Premium'}
                width={150}
                height={36}
                textFontSize={12}
              />
            )}
          </HStack>
        </LinearGradient>
      </View>

      <ScrollView
        style={styles.bottomListContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.subHeading}>My Items</Text>

        {posts.length > 0 ? (
          <FlatList
            mt={5}
            mb={heightToDp(6)}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={posts}
            renderItem={item => <HomeSingleItem item={item.item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View ml={5} />}
          />
        ) : (
          <View style={{marginBottom: 15}}>
            <EmptyStateComponent
              text={'No Data to Show'}
              height={30}
              width={30}
              marginTop={0}
            />
          </View>
        )}

        <Text style={styles.subHeading}>Scheduled pick ups and drop offs</Text>
        <View style={{marginBottom: '50%'}}>
          {requestedPickupPosts.length > 0 ? (
            <FlatList
              my={5}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={requestedPickupPosts}
              renderItem={item => <HomeSingleItem item={item.item} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View ml={5} />}
            />
          ) : (
            <EmptyStateComponent
              text={'No Data to Show'}
              height={30}
              width={30}
              marginTop={0}
            />
          )}
        </View>
      </ScrollView>
      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fullScreen: {
    height: heightToDp(100),
    width: widthToDp(100),
    backgroundColor: Colors.borderColor,
    // paddingBottom: heightToDp(20),
  },
  appBar: {
    height: heightToDp(10),
    width: widthToDp(100),
    paddingHorizontal: 24,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '400',
    color: Colors.secondaryText,
  },
  heading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(24),
    fontWeight: '600',
    color: Colors.primaryText,
    lineHeight: 38,
  },
  subHeading: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
    color: Colors.primaryText,
  },
  itemStoredContainer: {
    height: 200,
    width: widthToDp(75),
    paddingHorizontal: 25,
    paddingVertical: 14,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  items: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(12),
    fontWeight: '400',
    color: Colors.secondaryText,
    // lineHeight: 28,
  },
  outOf: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(12),
    fontWeight: '400',
    color: Colors.primaryText,
    marginRight: 10,
    // lineHeight: 38,
    textAlign: 'center',
  },
  boxLine: {
    height: 8,
    width: '100%',
    backgroundColor: Colors.background1,
    marginTop: 10,
    borderRadius: 5,
  },
  bottomListContainer: {
    // backgroundColor: Colors.white1,
    height: heightToDp(50),
    width: widthToDp(100),
    paddingTop: 30,
    paddingLeft: 20,
    marginTop: 10,
  },
  curvedContainer: {
    height: heightToDp(25),
    width: widthToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    backgroundColor: Colors.background1,
  },
});
export default HomeScreen;
