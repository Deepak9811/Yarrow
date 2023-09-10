import moment from 'moment';
import {HStack, Image, Text, View} from 'native-base';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Calender from '../assets/svg/Calender';
import Location from '../assets/svg/Location';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import {IItem} from '../model/item.model';
import {navigate} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
interface IProps {
  item: IItem;
  itemKey: any;
}
const HomeSingleItem = (props: IProps) => {
  const {item} = props;
  // console.log('item :->>>>>>>>>>>>>>>> ', props);
  return (
    <LinearGradient
      start={{x: 0.3, y: 1}}
      end={{x: 0.5, y: 0.7}}
      locations={[0, 1]}
      colors={[Colors.background1, Colors.background2]}
      style={styles.itemStoredContainer}>
      <Pressable
        onPress={() => navigate(Screens.itemDetail, {data: props.item})}
        // onPress={() => alert('hello ' + item.id)}
      >
        {/* <Text style={styles.id} noOfLines={1}>
        {item.id}
      </Text> */}
        <HStack mt={3}>
          <Image
            alt="pic"
            style={styles.picture}
            source={item.images ? {uri: item.images[0]} : undefined}
          />
          <View ml={3}>
            <Text style={styles.title}>{item.itemName}</Text>
            <HStack mt={1}>
              <HStack alignItems={'center'}>
                <Calender width={4} height={4} />
                <Text ml={1} style={styles.date}>
                  {moment(item.initialPickupTime).format('DD MMM YYYY')}
                </Text>
              </HStack>
              <HStack ml={2}>
                <Location width={4} height={4} />
                <Text ml={1} style={styles.location} noOfLines={1}>
                  {item.initialPickupAddress}
                </Text>
              </HStack>
            </HStack>
          </View>
        </HStack>
        <HStack mt={5}>
          <Text style={styles.requested} noOfLines={1}>
            {new Date(item.initialPickupTime) > new Date()
              ? `Pickup Requested ${moment(item.initialPickupTime).fromNow()}`
              : `Picked up  ${moment(item.initialPickupTime).fromNow()}`}
          </Text>
          {/* <Text
            // onPress={() => navigate(Screens.itemDetail, {data: props.item})}
            ml={2}
            style={styles.viewDetail}>
            {'View Details >'}
          </Text> */}
        </HStack>
      </Pressable>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  itemStoredContainer: {
    // height: 157,
    width: widthToDp(85),
    paddingHorizontal: 17,
    paddingVertical: 10,

    borderRadius: 7,
  },
  id: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: responsiveFontSize(14),
    lineHeight: 27,
    color: Colors.primaryText,
    width: widthToDp(60),
  },
  picture: {
    height: 48,
    width: 48,
    borderRadius: 7,
  },
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: responsiveFontSize(14),
    lineHeight: 20,
    color: Colors.primaryText,
  },
  date: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.primaryText,
    width: 73,
  },
  location: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.primaryText,
    width: 90,
  },
  requested: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.primaryText,
    // width: widthToDp(45),
  },
  viewDetail: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.primary,
  },
});
export default HomeSingleItem;
