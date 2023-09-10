import moment from 'moment';
import {FlatList, HStack, Image, Pressable, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import More from '../assets/svg/More';
import CustomAppBar from '../components/CustomAppBar';
import {heightToDp, widthToDp} from '../helpers/responsive';
import {INotification} from '../model/motification.model';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    const data: INotification[] = [
      {
        id: '7',
        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662142113971-e6d17d7a39d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '8',
        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662217461132-34fb0759b846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '9',

        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662040776839-6fdc4aba7a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '10',

        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662142113971-e6d17d7a39d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '11',

        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662217461132-34fb0759b846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '12',

        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662040776839-6fdc4aba7a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '13',

        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662142113971-e6d17d7a39d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '14',
        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662217461132-34fb0759b846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
      {
        id: '15',
        message: 'Your item has been arrived at our warehouse',
        image:
          'https://images.unsplash.com/photo-1662040776839-6fdc4aba7a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        date: new Date(12, 10, 2022).toString(),
      },
    ];
    setNotifications(data);
  }, []);
  const renderItem = (item: INotification) => {
    return (
      <HStack
        height={60}
        mt={6}
        justifyContent={'center'}
        alignItems={'center'}>
        <Image style={styles.image} source={{uri: item.image}} alt="profile" />
        <VStack ml={4} mt={2}>
          <Text mt={2} style={styles.message}>
            {item.message}
          </Text>

          <Text style={styles.dateText}>
            {moment(item.date).format('DD MMM LT')}
          </Text>
        </VStack>

        <Pressable onPress={() => alert('hello')} style={{marginTop: 30}}>
          <More height={6} width={6} />
        </Pressable>
      </HStack>
    );
  };
  return (
    <SafeAreaView style={{}}>
      <CustomAppBar title={'Notifications'} />
      <FlatList
        style={styles.flatList}
        data={notifications}
        renderItem={item => renderItem(item.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;
const styles = StyleSheet.create({
  flatList: {
    // marginHorizontal: 40,
    height: heightToDp(80),
    width: widthToDp(90),
    paddingBottom: 20,
    marginLeft: 10,
  },
  image: {
    height: widthToDp(15),
    width: widthToDp(15),
    borderRadius: widthToDp(7.5),
  },

  message: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    color: Colors.primaryText,
    width: widthToDp(65),
    fontSize: 14,
  },
  dateText: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    color: Colors.secondaryText,
    fontSize: 12,
  },
});
